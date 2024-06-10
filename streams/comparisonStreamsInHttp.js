const http = require("http");
const fs = require("fs");

// http server with no streams implemented
const server = http.createServer((req, res) => {
  fs.readFile(`${__dirname}/data.txt`, (err, data) => {
    res.end(data);
  });
});

server.listen(3001);



// http server with streams implemented
const server2 = http.createServer((req, res) => {

    const stream = fs.createReadStream(`${__dirname}/data.txt`);
    stream.pipe(res);
    
  });
  
  server2.listen(3002);

//   Instead of waiting until the file is fully read,
//  we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.