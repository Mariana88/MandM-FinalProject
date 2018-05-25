var express = require("express");
var app = express();
var path = require("path");
const bodyparer = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/static', express.static('public'));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/Views/index.html'));
});

app.get('/profile', function(req, res){
    res.sendFile(path.join(__dirname + '/Views/profilePage.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname + '/Views/login.html'));
});

app.get('/post', function(req, res){
    res.sendFile(path.join(__dirname + '/Views/postToFill.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname + '/Views/registerPage.html'));
});

app.listen(3000);
console.log("Running at Port 3000");