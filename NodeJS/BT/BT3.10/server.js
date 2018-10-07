const express = require('express');

const path = require('path');

const axios = require('axios');

let app = express();

// app.use(express.static('../BT3.10'));

app.get('/', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'index.html'));
});

app.get('/web15', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'web15.js'));
});

app.get('/web14', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'web14.js'));
});
app.get('/web13', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'web13.js'));
});
app.get('/web12', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'web12.js'));
});
app.get('/web11', (req,res) =>{
    res.sendfile(path.resolve(__dirname, 'web11.js'));
});
app.get('/web10', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'web10.js'));
});



app.listen(3000, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 3000!");
});
