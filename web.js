B1;2cvar express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var buf = new buffer(fs.readFileSync('index.html'), 'utf-8');
app.get('/', function(request, response) {
  response.send('Hello World 2!');
//  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
