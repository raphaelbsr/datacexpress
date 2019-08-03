var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Testing CI/CD Versão AHHHHHHH LE LE K LEK LEK!!");
});

app.listen(3000, function() {
  console.log("Testing CI/CD Versão 6!");
});
