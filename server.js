var express = require('express')
var app = express()
var request = require('request');
console.log(process.env);
var APP_DIR=process.env.APP_DIR
var APIKEY =process.env.APIKEY

//logging middleware

var logger = require('morgan')
app.use(logger('dev'))

//=================ROUTE VARIABLES==========================
crestedURL = 'https://api.darksky.net/forecast/'+APIKEY+'/38.911024,-107.031255';

friscoURL = 'https://api.darksky.net/forecast/'+APIKEY+'/39.7292,-105.9047';

indianPeaksURL = 'https://api.darksky.net/forecast/'+APIKEY+'/39.9614, -105.5108';

kenoshaURL = 'https://api.darksky.net/forecast/'+APIKEY+'/39.4133,-105.7567';

mosquitoURL = 'https://api.darksky.net/forecast/'+APIKEY+'/39.2814,-106.1861';

rmnpURL = 'https://api.darksky.net/forecast/'+APIKEY+'/40.3292,-105.5933';

steamboatURL = 'https://api.darksky.net/forecast/'+APIKEY+'/40.3847,-106.6117';

wpURL = 'https://api.darksky.net/forecast/'+APIKEY+'/39.8472,-105.9117';

//==================ROUTE FOR CRESTEDBUTTE===================

app.get('/forecast/38.911024,-107.031255', function(req,res) {
    request.get(crestedURL,function(error,response,body){
    res.send(body) })})


//==================ROUTE FOR FRISCO=========================

 app.get('/forecast/39.7292,-105.9047', function(req,res) {
     request.get(friscoURL,function(error,response,body){
     res.send(body) }) })


//==================ROUTE FOR INDIAN PEAKS===================
app.get('/forecast/39.9614,-105.5108', function(req,res) {
    request.get(indianPeaksURL,function(error,response,body){
    res.send(body) }) })


//==================ROUTE FOR KENOSHA PASS===================

app.get('/forecast/39.4133,-105.7567', function(req,res) {
    request.get(kenoshaURL,function(error,response,body){
    res.send(body) }) })

//==================ROUTE FOR MOSQUITO PASS==================

app.get('/forecast/39.2814,-106.1861', function(req,res) {
    request.get(mosquitoURL,function(error,response,body){
    res.send(body) }) })


//==================ROUTE FOR ROCKY MOUNTAIN=================

app.get('/forecast/40.3292,-105.5933', function(req,res) {
    request.get(rmnpURL,function(error,response,body){
    res.send(body) }) })


//==================ROUTE FOR STEAMBOAT SPRINGS==============
app.get('/forecast/40.3847,-106.6117', function(req,res) {
    request.get(steamboatURL,function(error,response,body){
    res.send(body) }) })


//==================ROUTE FOR WINTER PARK====================
app.get('/forecast/39.8472,-105.9117', function(req,res) {
    request.get(wpURL,function(error,response,body){
    res.send(body) }) })


console.log(APP_DIR);
app.use(express.static(APP_DIR))

var PORT = 8080;
app.listen(PORT, function () {
 console.log('web server listening on port', PORT)
})
