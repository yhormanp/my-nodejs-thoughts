// https://github.com/marioterron/node-exercises

// Connection to the server
// Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"

// Hint: Yo u need npm module - http

// Extra
// Set the port of the connection using an environment variable PORT


const http = require('node:http');
const PORT=1234;

const server = http.createServer((req, res) => {
    console.log('res received', res)
    res.end('hola mundo');
})


server.listen(PORT, () =>{
    console.log('the server is listening on port ', PORT)
})