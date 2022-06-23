const express = require('express');
const app = express();

const { config } = require('./config/index');
const { dbConnect } = require('./lib/mongoose');
const articlesApi = require('./routes/articles');
const authorsApi = require('./routes/authors');
const cors = require('cors');
const usersApi = require('./routes/users');
const sessionsApi = require('./routes/sessions');

//using cors
// app.use(cors);

app.use(cors())
app.use(express.json())

//body parser
app.use(express.json()) // to understan how interpretate data in json format

app.get('/', (req, res)=>{
    res.send('estoy vivo');
})
// articles routes
articlesApi(app);
authorsApi(app);
usersApi(app);
sessionsApi(app);


dbConnect()
.then( () => {
    app.listen(config.port, () => console.log(`the server instafeed is listening in the port ${config.port}`))

})
