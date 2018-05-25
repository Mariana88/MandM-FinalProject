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

//It returns array of user data
app.get('/api/user', function (req, res) {
    res.send(storage.data);
});

// It returns information if the user already exist in our system
app.get('/api/user/verify/:email', function (req, res) {
    let emailToCheck = req.param("email");
    let found = storage.data.find(function(element){
        return element.email == emailToCheck; 
    })
    res.send(found); 
    console.log(element);
    
    
    //nadal zwracasz cala tablice. Musisz zwrocic
    //informacje czy on istnieje czy nie. Czego mozesz do tego uzyc?
    //Musisz sprawdzic czy istnieje obiekt o takim emailu w storage
    //Do tego mozesz uzyc for, find, findIndex etc...
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
    if (user.email != undefined) {
        //Uzywaz nadmiernie res.send
        //funkcja res.send powinna zostac wykonana na samym koncu, kiedy juz wiesz
        //jaki jest wynik wszystkich operacji.
        //W tym kodzie stworzylabys dwa razy usera w storage.
        //Jezeli chcesz wypisac sobie caly storage albo usera, to logujesz po prostu
        //odpowiednia strukture. np.
        //console.log(user); //to wszystko
    
        console.log(user);
        res.send(storage.data.push(user)+ "204");
    } else {
        console.log(res.send("The user using this e-mail already exist."))
        //console log zwroci informacje (log) tylko po stronie serwera. Uzytkownik (postman/frontend
        //) nic o tym nie wie. Jezeli robimy jakas operacje to powinnismy uzyc res.send na koncu np.
        /*
            utworzenie obiektu
            jezeli (if) obiekt nie jest null -. dodaj do storage + odpisz 204 (przykladowo, moze byc string w styku OK)
            inaczej (else) -> console log + zwrot (res.send()) jakas informacje 
        */
    }
})

app.listen(3001, () => console.log("App listening on port 3001."));