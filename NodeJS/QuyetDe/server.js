const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');
const questionList = require('./questions.json');

const app = express();

let questionRandom;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/quiz', (req,res) => {
    res.sendFile(__dirname + '/public/quiz.html')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/quiz.html')
})

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/public/ask.html')
})

app.get('/vote', (req,res) => {
    res.sendFile(__dirname + '/public/vote.html')
})

app.post('/creatquestion', (req,res) => {
    console.log(req.body);
    const newQuest = {
        id: questionList.length,
        questionContent: req.body.questionContent,
        yes:0,
        no: 0,
    };

    questionList.push(newQuest);

    fs.writeFileSync('./questions.json', JSON.stringify(questionList));

    res.redirect('/quiz');
});

app.get('/randomquest', (req,res) => {
    if(questionList.length > 0){
        questionRandom = questionList[Math.floor(Math.random()*questionList.length)];
        res.send(questionRandom); 
    }
});

app.get('/votequest', (req,res) => {
    if(questionList.length > 0){
        let voteQuest = questionRandom;
        res.send(voteQuest); 
    }
});

app.post("/quiz", (req,res) => {
    const {questionid, answer} = req.body;
    questionList[questionid][answer] += 1;
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
    res.send({success: 1});
})

app.use(express.static('public'));

app.listen(3100, (err) => {
    if(err)console.log(err)
    else console.log('Server is listening at port 3100')
});

