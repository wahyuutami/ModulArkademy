//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');//import body parser

app.use(bodyParser.urlencoded({extended: false}))

//method get
app.get('/test', (req, res)=>{
    res.end("ini get XI RPL ");
});

//method post
app.post('/test', (req, res)=>{
    res.end("ini post XI RPL ");
});

//inisialisasi port
app.listen('8080', (e)=>{
    console.log(e);
});