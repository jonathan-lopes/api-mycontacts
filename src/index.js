const app = require('./server');

app.listen(process.env.PORT, () => console.log(`🔥 Sever started at http://localhost:${process.env.PORT}`));
