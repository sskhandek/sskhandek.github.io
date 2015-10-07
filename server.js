/**
 * Created by SujayKhandekar on 10/3/15.
 */

const PORT = 8000;

// requires
var express = require('express');
var app = express();

// Serve files from public
app.use(express.static(__dirname + '/public'));

//Start server
app.listen(PORT);
console.log('Server running at http://127.0.0.1:8000/');