const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const contactmodel = require('./model/contact');
const bgmimodel = require('./model/bgmi');
const valorantmodel = require('./model/valorant');
const freefiremodel = require('./model/freefire');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('reg');
});

app.get('/register/bgmi', (req, res) => {
    res.render('bgmi');
});

app.get('/register/valorant', (req, res) => {
    res.render('valorant');
});

app.get('/register/freefire', (req, res) => {
    res.render('freefire');
});

app.post('/contact', async (req, res) => {
    const { name, email, phone } = req.body;
    let newinfo = await contactmodel.create({
        name: name,
        email: email,
        phone: phone,
    });
    res.json({ success: true, message: 'Form received!' });
});

app.post('/register/bgmi/submit', async (req, res) => {
    try {
        const {
            teamName,
            contactNumber,
            player1Name, player1IGN, player1UID, player1Email,
            player2Name, player2IGN, player2UID, player2Email,
            player3Name, player3IGN, player3UID, player3Email,
            player4Name, player4IGN, player4UID, player4Email
        } = req.body;

        const newEntry = await bgmimodel.create({
            teamName,
            contactNumber,
            player1Name,
            player1IGN,
            player1UID,
            player1Email,
            player2Name,
            player2IGN,
            player2UID,
            player2Email,
            player3Name,
            player3IGN,
            player3UID,
            player3Email,
            player4Name,
            player4IGN,
            player4UID,
            player4Email
        });
        res.render('successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering team. Please try again.');
    }
});

app.post('/register/valorant/submit', async (req, res) => {
    try {
        const {
            teamName,
            contactNumber,
            player1Name, player1RiotId, player1Email,
            player2Name, player2RiotId, player2Email,
            player3Name, player3RiotId, player3Email,
            player4Name, player4RiotId, player4Email,
            player5Name, player5RiotId, player5Email
        } = req.body;

        await valorantmodel.create({
            teamName,
            contactNumber,
            player1Name,
            player1RiotId,
            player1Email,
            player2Name,
            player2RiotId,
            player2Email,
            player3Name,
            player3RiotId,
            player3Email,
            player4Name,
            player4RiotId,
            player4Email,
            player5Name,
            player5RiotId,
            player5Email
        });
        res.render('successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering team. Please try again.');
    }
});

app.post('/register/freefire/submit', async (req, res) => {
    try {
        const {
            teamName,
            contactNumber,
            player1Name, player1IGN, player1UID, player1Email,
            player2Name, player2IGN, player2UID, player2Email,
            player3Name, player3IGN, player3UID, player3Email,
            player4Name, player4IGN, player4UID, player4Email
        } = req.body;

        await freefiremodel.create({
            teamName,
            contactNumber,
            player1Name,
            player1IGN,
            player1UID,
            player1Email,
            player2Name,
            player2IGN,
            player2UID,
            player2Email,
            player3Name,
            player3IGN,
            player3UID,
            player3Email,
            player4Name,
            player4IGN,
            player4UID,
            player4Email
        });
        res.render('successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering team. Please try again.');
    }
});

app.listen(3000);