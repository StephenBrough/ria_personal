/*
 *  app.js
 *  
 *  NodeJS app file
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: December 3, 2013
 */
 
 var express = require('express');
 var request = require('request');   
 var app = express(); 
 
 /* Rotten Tomatoes key variables */
 var rottenKey = '74pt3qns49x8qu5a2fumx2qf';
 var path = "http://api.rottentomatoes.com";
 var endpoint = "/api/public/v1.0/movies.json"; 
 /* * * * * * * * * * * * * * * * */
 
 app.use('/js', express.static(__dirname + '/js')); 
 
 app.get('/rottenApi/:page_limit/:page/:q', function(req, response) {
   console.log(req.params);   
   
   var url = path + endpoint + '?' +
   'q=' + req.params.q.split('%20').join('+') + '&'+
   'page_limit=' + req.params.page_limit + '&' +
   'page=' + req.params.page + '&' +
   'apikey=' + rottenKey;
   console.log('Path: ' + url);
   
   //var r = 
   request(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       console.log(body); // Print the google web page.
     }        
   }).pipe(response);  
   //response.send(r);
 });
 
 /*app.get('/rottenApi', function(request, response) {
  var r = req("http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Butch+Cassidy&page_limit=10&page=1&apikey=74pt3qns49x8qu5a2fumx2qf", function (error, response, body) {
     if (!error && response.statusCode == 200) {
       console.log(body); // Print the google web page.
     }        
   });  
   response.send(r);   
 }); */
 
 app.get('/', function(request, response) {
    response.sendfile('index.html');
 });

 
 app.listen(3000); 