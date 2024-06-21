const express = require('express');
const dittonJson = require('./pokemon/ditto.json');
const { moviesApi } = require('./3.express-movies');
const { articlesApi } = require('./3.express-Articles');
const { postsAPI } = require('./3.express-posts');
const app = express();

const PORT = process.env.PORT ?? 1234;

app.use((req, res, next) => {
  console.log('mi primer middleware');
  next();
});
app.use(express.json());
moviesApi(app);
articlesApi(app);
postsAPI(app);

app.get('/', (req, res) => {
  //   res.status(200).send('<h2>Mi pagina web</h2>');
  res.json({ message: 'hola mundo mod' });
});

app.post('/pokemon/ditto', (req, res) => {
  res.json(dittonJson);
});

app.use((req, res) => {
  res.status(404).send('<h1>404 NOT FOUND</h4>');
});

app.listen(PORT, () => {
  console.log(`server listening on port :${PORT}`);
});
