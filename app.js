var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

app.post('/contact', function(req, res){
    res.render('contact_success',{data: req.body})
})
app.get('/profile/:name', function(req, res) {
    var data = { age: 26, contact_no: +91 - 9824341494, hobbies: ['Reading', 'Rpogramming', "New Technology"] }
    res.render('profile', { person: req.params.name, data: data });
})

app.listen(3000);
console.log("server listening on 3000 port")