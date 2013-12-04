/*
 *  services.js
 *  
 *  Services module for the Aggregate Movie App Thingy.
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: December 3, 2013
 */
 
 /* Rotten Tomatoes key variables */
 var rottenKey = '74pt3qns49x8qu5a2fumx2qf';
 var path = "http://api.rottentomatoes.com";
 var endpoint = "/api/public/v1.0/movies.json"; 
 /* * * * * * * * * * * * * * * * */
 
  var params = {    
    page_limit:10,   // The amount of movie search results to show per page
    page:1,          // The selected page of movie search results  
    apikey:rottenKey // My personalized, fancy shmansy API key for Rotten Tomatoes!
  };
 
 var services = angular.module('services', []);
 
 services.factory('Movies', ['$http', function($http) {
   return {
     get: function(args, callback) {
        params.q = args;
        $http({
          method: 'GET', 
          url:Arg.url(path + endpoint, params)
          //headers: {'Access-Control-Allow-Origin' : '*'}
          })
          .success(function(data, status, headers, config){
            callback(data);
          });
        console.log("Rotten Tomatoes URL: " + Arg.url(path + endpoint, params));
     }
   };
 }]);