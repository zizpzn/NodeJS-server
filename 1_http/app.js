const http = require("http");

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Welcome!</h1></body>");
    res.write("</html>");
  } else if (url === "/courses") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Crouses</title></head>");
    res.write("<body><h1>Crouses!</h1></body>");
    res.write("</html>");
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Not Found!</h1></body>");
    res.write("</html>");
  }
  res.end();
});

server.listen(8080);
