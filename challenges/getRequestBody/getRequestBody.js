const http = require('http');
const myQs= require('querystring');



http.createServer((req, res) => {
    console.log(req.method)
    if( req.url === "/validateget" && req.method === 'GET'){
        res.end('bienvenido al metodo GET')
    }


    if( req.url === "/validatepost" && req.method === 'POST'){
        let body ='';
        req.on('data', (chunk) => {
            body += chunk;
        } )

        req.on('end', () => {
            console.log('Body: ' + body)
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('bienvenido al metodo post, data recibida')
        })
    }
}).listen(3003)