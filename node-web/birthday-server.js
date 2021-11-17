const http = require("http");

const server = http.createServer();

const Days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Viernes', 'Sabado', 'Domingo'];
const Months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/cumple") {
    let body = [];

    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();
        let result = body.split('/')
        console.log(result);
        let date = new Date(result[2], result[1] - 1, result[0]);
        let dateFormatt = `Naciste el día ${Days[date.getDay()]} 
        ${date.getDate()} de ${Months[date.getMonth()]} del año ${date.getFullYear()}`;
        console.log(date, dateFormatt)

        res.end(body);
      });
  } else {
    console.log("not approved url");
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8001);
console.log("Servidor en la url http://localhost:8001");
