/*
 *  services.js
 *  
 *  Services module for the Aggregate Movie App Thingy.
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: December 3, 2013
 */
  
 var params = {    
   page_limit:10,   // The amount of movie search results to show per page
   page:1,          // The selected page of movie search results  
   //apikey:rottenKey // My personalized, fancy shmansy API key for Rotten Tomatoes!
 };
  
 var rottenPath = '/rottenApi';
 
 var services = angular.module('services', []);
 
 services.factory('Movies', ['$http', function($http) {
   return {
     get: function(args, callback) {        
        $http({
          method: 'GET', 
          url: rottenPath + '/' + params.page_limit + '/' + params.page + '/' + args
        })
          .success(function(data, status, headers, config){
            //console.log(data);
            callback(data);
          });
        console.log("Rotten Tomatoes URL: " + rottenPath + '/' + params.page_limit + '/' + params.page + '/' + args);
     }
   };
 }]);