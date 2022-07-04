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
    res.write("Welcome!");
  } else if (url === "/courses") {
    res.write("Courses");
  } else {
    res.write("Not Found");
  }
  res.end();
});

server.listen(8080);
