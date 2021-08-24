var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("welcome to Docker-Jenkins trail");
});

app.listen(3000);
