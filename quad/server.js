const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3008;
const db = require('./DATABASE/databaseFuncs.js');
// cors

const cors = require('cors');
app.use(cors());

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'))
//
// the table of the users  Describtion  
app.post('/signup', async (req, res)  => {
    console.log('req.body');
    console.log('req.body ====>',req.body);
    try {
        const data = await db.addUsers(req.body);
        res.status(200).send(data);
    }
    catch (e) {
        res.send(e);
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
        console.log('[Log in all data]',data);
        for(var i = 0; i < data.length; i++) {
            var elm = data[i];
            console.log('elm.email',elm.Email)
             console.log('elm.password',elm.Password)
             // console.log('req.body.name / password',req.body.Email,req.body.Password);
             // console.log('elm ====> ',elm.Email === req.body.Email && elm.Password === req.body.Password);
            if (elm.Email === req.body.email && elm.Password === req.body.password) {
                res.status(200).send('successfully Logged In !')
            }
        }
    }catch (err) {console.log(err)}
});

// =================================================================
app.put('/update', async (req, res) => {
    console.log('req.body ====>',req.body);
    try {
        const elm = await db.updateUsersAllData(req.body);
        res.status(200).send(elm)
    }catch(e) {
        res.send(e)
    }
});
// =================================================================
// setting up profile

  // add  Description
  app.post('/profile', async (req, res)  => {
    console.log('req.body ====>',req.body);
    try {
        const profileData = await db.addUsersDescription(req.body);
        res.send(profileData);
    }
    catch (e) {
        res.send(e);
    }
});

// Getting All the SignedIn Users Description
app.get('/profile', async (req, res) => {
    try{
        const profileAllData = await db.UsersDescription();
        res.status(200).send(profileAllData);
    }
    catch (err) {
        console.error(err);
    }
})

// getting job offers
app.get('/home', async (req, res) => {
    try{
        const jobsData = await db.jobOffers();
        res.status(200).send(jobsData);
    }
    catch (err) {
        console.error(err);
    }
})
// Company signUp
app.post('/signup', async (req, res) => {
    try{
        const Cdata = await db.addCompanySignUpData();
        res.status(200).send(Cdata);
    }
    catch (e) {res.send(e)}
})
app.post('/login', async (req, res) => {
    try {
        const data = await db.addCompanySignUpData();
        console.log('[Log in all data]',data);
        for(var i = 0; i < data.length; i++) {
            var elm = data[i];
            if (elm.Email === req.body.email && elm.Password === req.body.password) {
                res.status(200).send('successfully Logged In !')}};
    }catch (err) {console.log(err)}
    
// 
});
app.listen(port, () => console.log(`server is listening on port ${port}`));