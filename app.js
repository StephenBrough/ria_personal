/*
 *  app.js
 *  
 *  NodeJS app file
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: December 3, 2013
 */
 
 // Requires and stuff for init
 var express = require('express');
 var request = require('request');   
 var Twit = require('twit');
 var app = express(); 
 
 /* Rotten Tomatoes key variables */
 var rottenKey = '74pt3qns49x8qu5a2fumx2qf';
 var path = "http://api.rottentomatoes.com";
 var endpoint = "/api/public/v1.0/movies.json"; 
 /* * * * * * * * * * * * * * * * */
 
 
 /* Twitter key variables and Twit object creation */ 
 var T = new Twit({
   consumer_key: 'WwRjYtu0rz42qhdG7e3nA',
   consumer_secret: 'AapYHYjF3M7JKqVn5cI4bbCXfYX9OpvNiQFNxBLnDE',
   access_token: '563963604-AAgw8s7v4fwh8knpji2xOFXCkYCxcJc3Wr7b6TM6',
   access_token_secret: 'FWA0DxU3Yy778cXUWRpfIg82Mdi6fePoyhSEKB4YCURNU'
 }); 
 /* * * * * * * * * * * * * * * * */
 
 app.use('/js', express.static(__dirname + '/js')); 
 
 app.get('/rottenApi/:page_limit/:page/:q', function(req, response) {
   console.log(req.params);   
   
   var stream = T.stream('statuses/filter', { track: 'mango' });
   stream.on('tweet', function(tweet) {
     console.log(tweet);
   });
   
   var url = path + endpoint + '?' +
   'q=' + req.params.q.split('%20').join('+') + '&'+
   'page_limit=' + req.params.page_limit + '&' +
   'page=' + req.params.page + '&' +
   'apikey=' + rottenKey;
   console.log('Path: ' + url);
   
  
   request(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       //console.log(body); // Print the google web page.
     }        
   }).pipe(response);     
 });
 
 app.get('/', function(request, response) {
    response.sendfile('index.html');
 });
 
 
 app.listen(3000); 