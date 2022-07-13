import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  console.log("path: ", req.path);
  console.log("headers: ", req.headers);
  console.log("params: ", req.params);
  console.log("query: ", req.query);
});

app.listen(8080, () => {
  console.log("Server in running on http://localhost:8080");
});
