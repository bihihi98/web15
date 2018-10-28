const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const ScoreModel = require('./models/scoreModel')

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/minihack", (err) => {
    if (err) console.log(err);
    else console.log("DB connect success")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/creat.html')
});

app.get('/creat', (req, res) => {
    res.sendFile(__dirname + '/public/creat.html')
});

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/game.html')
});

app.use(express.static('public'));

app.post('/creatnewgame', (req, res) => {
    ScoreModel.create({
        playerName1: req.body.playerName1,
        playerName2: req.body.playerName2,
        playerName3: req.body.playerName3,
        playerName4: req.body.playerName4
    },
        (err, scoreCreated) => {
            if (err) console.log(err);
            else res.redirect('/game/' + scoreCreated._id)
        })
});

app.get('/game/:idgame', (req, res) => {
    res.sendFile(__dirname + '/public/game.html')
});

app.get('/gamedetail/:idgame', (req, res) => {
    let idgame = req.params.idgame;
    ScoreModel.findById(idgame, (err, gameFound) => {
        if (err) console.log(err);
        else if (!gameFound) console.log("not found");
        else { res.send({success: 1, game: gameFound}); }
    })
});

app.listen(8080, (err) => {
    if (err) console.log(err)
    else console.log('Server is listening at port 8080')
});