const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./src/router/index");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRouter);
app.listen(8080, () => {
  console.log("listening on post, 8080");
});
