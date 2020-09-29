const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const db = require('../database-mysql');

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

express.use(express.static('public'))
// SIGNING UP 
app.post('/signup', async (req, res)  => {
    try {
        const data = await db.createUser(req.body);
        res.send(data);
    }
    catch (err) {
        console.error(err);
    }
});

// Getting All the Signed In Users
app.get('/signup', async (req, res) => {
    try{
        const allData = await db.Users();
        res.status(200).send(allData);
    }
    catch (err) {
        console.error(err);
    }
})

// checking if login data is valid
app.post('/login', async (req, res) => {
    try {
        const data = await db.Users();
        console.log('[Log in cheking data]',data);
        for(var elm of data) {
                console.log('req.body.name / password',req.body.name,req.body.password);
                elm.name === req.body.name && elm.password === req.body.password ? res.status(200).send('successfully Logged In !')
                : res.status(400).send('[Logging in data does not match  match ] err',err);
        }
    }catch (e) {console.log(e)}
});

// Updating Users data .
app.put('/Update', async(req, res) => {
    try{
           const UpdatData = await db.updateUsers(req.body)
    }
    catch (e) {console.log}
})


app.listen(port, () => console.log(`server is listening on port ${port}`));