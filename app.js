var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

app.get('/profile/:name', function(req, res) {
    var data = { age: 26, contact_no: +91 - 9824341494, hobbies: ['Reading', 'Rpogramming', "New Technology"] }
    res.render('profile', { person: req.params.name, data: data });
})

app.listen(3000);
console.log("server listening on 3000 port")