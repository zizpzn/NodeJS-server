import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
});

app.listen(8080, () => {
  console.log("Server in running on http://localhost:8080");
});
