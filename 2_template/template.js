const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

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
  if (url === "/") {
    ejs.renderFile("./index.ejs", { name }).then((data) => {
      res.end(data);
    });
  } else if (url === "/courses") {
    ejs.renderFile("./courses.ejs", { courses }).then((data) => {
      res.end(data);
    });
  } else {
    ejs.renderFile("./not-found.ejs", { name }).then((data) => {
      res.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
