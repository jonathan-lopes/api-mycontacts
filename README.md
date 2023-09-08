# API myContacts

API para cadastrar, editar, deletar e categorizar seus contatos, essa API será consumida pela aplicação front-end disponível nesse [link](https://github.com/jonathan-lopes/mycontacts).

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:jonathan-lopes/api-mycontacts.git
```

Entre no diretório do projeto

```bash
  cd api-mycontacts
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu `.env`, basta usar de exemplo o arquivo `.env.example`.

`PORT`

`DB_HOST`

`DB_PORT`

`DB_USER`

`DB_PASSWD`

`DB_NAME`

## Documentação da API

#### Retorna todos os contatos

```http
  GET /contacts
```

#### Retorna um contato

```http
  GET /contacts/${id}
```

| Parâmetro | Tipo     | Descrição                                      |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID do contato que você quer |

#### Cria um contato

```http
  POST /contacts
```

| Body          | Tipo     | Descrição       |
| :------------ | :------- | :-------------- |
| `name`        | `string` | **Obrigatório** |
| `email`       | `string` |                 |
| `phone`       | `string` |                 |
| `category_id` | `string` |                 |

Exemplo:

```js
const body = {
  name: 'Ana',
  email: 'ana@mail.com',
  phone: '(71) 99999-9999',
  category_id: '',
};
```

#### Atualiza um contato

```http
  PUT /contacts/${id}
```

| Parâmetro | Tipo     | Descrição                                                |
| :-------- | :------- | :------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID do contato que você quer atualizar |

| Body          | Tipo     | Descrição       |
| :------------ | :------- | :-------------- |
| `name`        | `string` | **Obrigatório** |
| `email`       | `string` |                 |
| `phone`       | `string` |                 |
| `category_id` | `string` |                 |

Exemplo:

```js
const body = {
  name: 'Ana Maria',
  email: 'maria.ana@mail.com',
  phone: '(71) 99999-9999',
  category_id: '',
};
```

#### Deleta um contato

```http
  DELETE /contacts/${id}
```

| Parâmetro | Tipo     | Descrição                                              |
| :-------- | :------- | :----------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID do contato que você quer deletar |

#### Retorna todos as categorias

```http
  GET /categories
```

#### Retorna uma categoria

```http
  GET /categories/${id}
```

| Parâmetro | Tipo     | Descrição                                        |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer |

#### Cria uma categoria

```http
  POST /categories
```

| Body   | Tipo     | Descrição       |
| :----- | :------- | :-------------- |
| `name` | `string` | **Obrigatório** |

Exemplo:

```js
const body = {
  name: 'Instagram',
};
```

#### Atualiza uma categoria

```http
  PUT /categories/${id}
```

| Parâmetro | Tipo     | Descrição                                                  |
| :-------- | :------- | :--------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer atualizar |

| Body   | Tipo     | Descrição       |
| :----- | :------- | :-------------- |
| `name` | `string` | **Obrigatório** |

Exemplo:

```js
const body = {
  name: 'Discord',
};
```

#### Deleta uma categoria

```http
  DELETE /categories/${id}
```

| Parâmetro | Tipo     | Descrição                                                |
| :-------- | :------- | :------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer deletar |

## Stack utilizada

- Node
- Express
- Postgres
