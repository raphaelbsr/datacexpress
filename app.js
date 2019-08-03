var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("!!! Data C CI/CD VERSAO 1 !!!");
});

app.listen(3000, function() {
  console.log("Testing CI/CD Versão 6!");
});
