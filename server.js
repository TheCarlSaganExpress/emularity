var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname));
app.use(express.static('public'))
app.use(express.static('files'))
const File		 	= require('fs');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/example_MADE - Copy.html'));
    
});

var contents = File.readFileSync("./Halo2600.json");

      var jsonContent = JSON.parse(contents);
      console.log(jsonContent);
//export function jsonFunction(){
  //  return jsonContent;
//}
app.listen(8080);