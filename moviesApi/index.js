const express =  require('express');

const app = express();
const { config } = require('./config/index')

const moviesApi= require('./routes/movies')

const {logError, errorHandler, wrapError} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');



//body parser
app.use(express.json()) // to understan how interpretate data in json format

// routes
moviesApi(app);
// catch error 404
app.use(notFoundHandler)

// middlewares deben ir al final de las rutas
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })


// app.get('/json', (req, res) => {
//     res.json( {hello: 'world'})
// })

app.listen(config.port, ()=> console.log(`Listening http://localhost:${config.port}`))