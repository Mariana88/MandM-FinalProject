const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors());

app.post('/withBody', (req,res)=>{
    console.log(req.body);
})

app.post('/addUser', (req, res) => {
    res.send(req.params)
    // console.log(req.params);
    // console.log(req.headers);
});

app.get('/', (req, res) => res.send('Hello there!'));
app.post('/', (req, res) => res.send('Hello from post!'));
app.get('/:email', function (req, res) {
    res.send(req.body.newUser.email) 
    
})


app.listen(3001, () => console.log("App listening on port 3001."));