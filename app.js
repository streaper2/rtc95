const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('hello zoulette !')
})

app.listen(8080, function(){
    console.log('listen on 8080')
})