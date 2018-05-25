const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
let storage = require('./UserStorage');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors());

//It returns array of user data
app.get('/api/user', function(req, res){
    res.send(storage.data);
});

// It returns information if the user already exist in our system
app.get('/api/user/byEmail/:email', function(req, res){
    res.send(storage.data);
});

//It takes data from request and sends it to system
app.post('/api/user', (req, res)=> {
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location,
        commentsAboutYou: req.body.commentsAboutYou,
        profilePircture: req.body.profilePircture
    };
})

app.listen(3001, () => console.log("App listening on port 3001."));