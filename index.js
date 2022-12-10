var express = require("express");
var app = express();
const port = 4200;

app.use(express.static("dist/my-interview-project"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });