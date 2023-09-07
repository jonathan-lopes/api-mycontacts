const isValidUUID = require('../utils/isValidUUID');
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const { orderBy } = req.query;
    const contacts = await ContactsRepository.findAll(orderBy);
    res.json(contacts);
  }

  async show(req, res) {
    // obtém UM registro
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid contact id' });
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    return res.json(contact);
  }

  async store(req, res) {
    // Criar novo um registro
    const { name, email, phone, category_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    if (email) {
      const contactExsits = await ContactsRepository.findByEmail(email);

      if (contactExsits) {
        return res.status(409).json({ error: 'This e-mail is alredy in use' });
      }
    }

    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return res.status(201).json(contact);
  }

  async update(req, res) {
    // Editar um registro
    const { name, email, phone, category_id } = req.body;
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid contact id' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (email) {
      const contactByEmail = await ContactsRepository.findByEmail(email);

      if (contactByEmail && contactByEmail.id !== id) {
        return res.status(409).json({ error: 'This e-mail is alredy in use' });
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return res.json(contact);
  }

  async delete(req, res) {
    // Deletar um registro
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid contact id' });
    }

    await ContactsRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
