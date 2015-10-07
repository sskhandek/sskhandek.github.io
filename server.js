/**
 * Created by SujayKhandekar on 10/3/15.
 */

const PORT = 8000;

// Requires
var express = require('express');
var app = express();
var compressor = require('node-minify');

// Minify
new compressor.minify({
    type: 'gcc',
    fileIn: [
        'public/scripts/app.js',
        'public/scripts/controllers/main.js'
    ],
    fileOut: 'public/temp/main.min.js',
    callback: function(err, min){
        console.log(err);
    }
});

// Serve files from public
app.use(express.static(__dirname + '/public'));

//Start server
app.listen(PORT);
console.log('Server running at http://127.0.0.1:8000/');