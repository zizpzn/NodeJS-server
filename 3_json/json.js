const http = require("http");

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = "Won";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "NodeJS" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/courses") {
    if (method === "GET") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(courses));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
