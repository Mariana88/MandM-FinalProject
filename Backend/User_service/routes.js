const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors());

app.post('/addUser', (req, res) => {
    res.send(req.params)
    // console.log(req.params);
    // console.log(req.headers);
});

app.get('/', (req, res) => res.send('Hello there!'));
app.post('/', (req, res) => res.send('Hello from post!'));
app.get('/:userName', function (req, res) {
    res.send(req.params) 
    if (firstName == undefined || lastName == undefined ||
        userName == undefined || mail == undefined ||
        password == undefined) {
        res.send("Error");
    } else {
        res.send()
    }
})


app.listen(3001, () => console.log("App listening on port 3001."));