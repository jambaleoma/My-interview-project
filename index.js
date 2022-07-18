var express = require("express");
var app = express();
const port = 4200;

app.use(express.static("dist/my-interview-project"));
app.get("/", function (req, res) {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });