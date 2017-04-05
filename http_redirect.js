//set up plain http server
var express = require('express')
var app = express()

//set up a route to redirect http to https
app.get('*',function(req,res){
   res.redirect('https://projectsnowshoe.com')
})

//have it listen on 8080
console.log('starting server on 80')
app.listen(80);
