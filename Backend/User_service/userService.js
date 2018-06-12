const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
let storage = require('./model/userStorage');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors());

app.get('/login', function(req, res){
    let emailToVerify  = req.query.email;
    let passwordToVerify = req.query.password;
    if(emailToVerify  != undefined && passwordToVerify  != undefined){
        let user = storage.data.find(function(el){
            return el.email == emailToVerify  && el.password == passwordToVerify;
        })
        res.send (user);
    }
})

//It returns array of user data
app.get('/api/user', function (req, res) {
    res.send(storage.data);
});

// It returns information if the user already exist in our system
app.get('/api/user/authenticate/:email/:password', function (req, res) {
    let emailToCheck = req.params.email;
    let passwordToCheck = req.params.password;
    let found = storage.data.find(function(element){
        return element.email === emailToCheck && element.password === passwordToCheck; 
    });
    if (found != undefined){
        res.send({
            isValid: true
        })
    }else{
        res.send({
            isValid: false
        }); 
    }
});

//It takes data from request and sends it to system
app.post('/api/user', (req, res) => {
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location,
        commentsAboutYou: req.body.commentsAboutYou,
        profilePicture: req.body.profilePicture
    };
    console.log(user);
    if (user.email != "undefined") {
        console.log(user);
        storage.data.push(user);
        res.send("204: " + user);
    } else {
        console.log(res.send("Invalid email"))
        
    }
})

app.listen(3001, () => console.log("App listening on port 3001."));