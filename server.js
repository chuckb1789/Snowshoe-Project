var express = require('express')
var app = express()
var request = require('request');

// console.log(process.env);

var APP_DIR=process.env.APP_DIR
var APIKEY =process.env.APIKEY

var HTTP = require('http');
var HTTPS = require('https');

fs = require('fs');

ports = {
  http: process.env.PORT || 80,
  https: process.env.PORT_SSL || 443
};

//MIDDLEWARE THAT WILL REDIRECT ALL TRAFFIC TO HTTPS
app.all('*', ( req, res, next ) => {
    if( req.protocol === 'http' ) {
        res.set('X-Forwarded-Proto','https');
        res.redirect('https://'+ req.headers.host + req.url);
    } else {
        next();
    }
});

//LOGGING MIDDLEWARE
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

//==================ROUTE FOR MAIN PAGE=====================
app.get('/', function(req, res){
    res.sendFile("index.html", { root: './Public/html' })
});

//==================ROUTE FOR DISCOVER PAGE=================
app.get('/discover', function(req, res) {
    res.sendFile("discover.html", { root: './Public/html'})
});

console.log(APP_DIR);
app.use(express.static('./Public'))

// start an http server listening on the default port
HTTP.createServer(app).listen(ports.http);

// start an https server listening on the default port
try {
    var httpsConfig = { // https://nodejs.org/api/https.html
         key:  fs.readFileSync('/etc/letsencrypt/live/www.projectsnowshoe.com/privkey.pem'),
         cert: fs.readFileSync('/etc/letsencrypt/live/www.projectsnowshoe.com/cert.pem')
    };
    HTTPS.createServer( httpsConfig, app ).listen( ports.https );
    console.log("Server up and running via HTTPS");
} catch (e) {
    console.error('Could not HTTPS server:', e);
}
