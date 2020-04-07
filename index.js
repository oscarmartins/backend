var express = require('express');
var app = express();
console.log(__dirname)
app.use('/', express.static(__dirname + '/static/'));

app.listen(8080, function() { 
    console.log('listening'); 
});