const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');

const app = express();

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

app.post('/creatquestion', (req,res) => {
    console.log(req.body);
    let questionList = JSON.parse(fs.readFileSync('./questions.json'));
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

app.use(express.static('public'));

app.listen(3100, (err) => {
    if(err)console.log(err)
    else console.log('Server is listening at port 3100')
});

