const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const questionList = require('./questions.json');

const QuestionModel= require('./models/questionModel')

mongoose.connect("mongodb://localhost/quyetde", (err) => {
    if(err) console.log(err);
    else console.log("DB connect success")
})
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
    QuestionModel.create({questionContent: req.body.questionContent},
        (err, questionCreated)=> {
            if(err) console.log(err);
            else res.redirect('/question/'+questionCreated._id)
        })
});

app.get('/randomquest', (req,res) => {
    // if(questionList.length > 0){
    //     let questionRandom = questionList[Math.floor(Math.random()*questionList.length)];
    //     res.send(questionRandom); 
    // }
    let randomindex = Math.floor(Math.random()*QuestionModel.length);
    QuestionModel.findOne({}).skip(randomindex == 0 ? randomindex : randomindex - 1)
    .exec((err, questionRandom) => {
        if(err)console.log(err);
        else{res.send(questionRandom);}
    })
});

app.get('/question/:idquest', (req,res) => {
    res.sendFile(__dirname + '/public/vote.html')
});

app.get('/questiondetail/:idquest', (req,res) => {
    let idquest = req.params.idquest;
    QuestionModel.findById(idquest);
    QuestionModel.findOne({"_id": idquest}, (err, questionFounded) => {
        if(err)console.log(err);
        else if(!questionFounded)console.log("not found");
        else{res.send({ success: 1, question: questionFounded});}
    })
});

app.post("/quiz", (req,res) => {
    const {questionid, answer} = req.body;
    QuestionModel.findByIdAndUpdate(questionid, {$set:{[answer]: 1}},{new: true}, (err, questionUpdated) => {
        if(err)console.log(err);
        else{res.send({success: 1, question: questionUpdated});}
    })
    
})

app.use(express.static('public'));

app.listen(3100, (err) => {
    if(err)console.log(err)
    else console.log('Server is listening at port 3100')
});

