const http = require('node:http');
const dittonJson = require('./pokemon/ditto.json');

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittonJson));
          break;

        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404 not found</h1>');
      }
      break;

    case 'POST':
      switch (url) {
        case '/pokemon':
          console.log('case pokemon');
          let body = '';
          // escuchar el evento data
          req.on('data', (chunk) => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const data = JSON.parse(body);

            console.log('info received', data);

            res.writeHead(201, {
              'Content-Type': 'application/json; charset=utf-8',
            });

            return res.end(JSON.stringify(data));
          });
          break;
      }

      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end('<h1>404 not found</h1>');
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234');
});
