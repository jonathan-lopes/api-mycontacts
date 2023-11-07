module.exports = (req, res, next) => {
  const allowOrigins = ['http://localhost:5173', 'http://localhost:3000'];

  const { origin } = req.headers;
  const isAllowed = allowOrigins.includes(origin);

  if (isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Max-Age', '10');
  }

  next();
};
