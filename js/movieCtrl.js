/*
 *  movieCtrl.js
 *  
 *  Controller for the Aggregate Movie App Thingy
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: November 10, 2013
 */
 
  // App specific vars
 var app = angular.module('movieApp', []);
 var query = "";
 
 // Main Angular controller for this app
 app.controller('movieCtrl', function($scope, $http){
		$scope.message = "Test";		
		// Keyup callback for the search input
		$scope.keyUp = function(keyEvent) {			
			console.log('keyup', keyEvent); // FOR TESTING
      query = $scope.movieSearch;
      // Only run the HTTP request if there is something to request
      if (query != null && query != "" && typeof query != undefined) {        
        freeBase($http, query);
        rottenTomatoes($http, query);
      }
    }; 
      
 }); 
 
/* Function object declaration for hitting the Freebase Google API 
 *
 * @params query - String that has the query for Freebase
 * @author Stephen Brough
 *
 */
function freeBase($http, query){
  // Freebase API stuff
  var freeBaseApiKey = "AIzaSyDMH4mMetvW-Oa-skN49ynGFAcMsqIDEgY";
  var path = "https://www.googleapis.com/freebase/";  
  var version = "v1sandbox"; // use 'v1' for production
  var apiName = "search";    // 'mqlread', 'search', 'topic'
  var endpoint = version + "/" + apiName;
  var params = {
    query:query
  };
  $http({method: 'GET', url: Arg.url(path + endpoint, params)}).
    success(function(data, status, headers, config) {
    // Log everything for testing
      console.log("Data: " + JSON.stringify(data));
      //$scope.result = data.result[0].name;
      console.log("Status: " + status);
      console.log("Headers: " + headers);
      console.log("Config: " + config);
    }).
    error(function(data, status, headers, config){
      // Log everything for testing
      alert("ERROR\nStatus code: " + status);
      console.log("Data: " + data);
      console.log("Status: " + status);
      console.log("Headers: " + headers);
      console.log("Config: " + config);
      });
    console.log("Uri: " + Arg.url(path + endpoint, params));

}
 
/* Function object declaration for hitting the Rotten Tomatoes API. This is a declarative function
 *   to take advantage of function hoisting so that we can declare this on the scope object in the 
 *   controller above.
 *
 * @params query - String that has the query for Rotten Tomatoes
 * @return Returns a JSON object
 * @author Stephen Brough
 *
 */
function rottenTomatoes($http, query){
  // TODO: Change to use JSONP
  var apiKey = "74pt3qns49x8qu5a2fumx2qf"; // API Key for Rotten Tomatoes
  var path = "http://api.rottentomatoes.com";
  var endpoint = "/api/public/v1.0/movies.json";
  var params = {
    q:query,         // The plain text search query to search for a movie (URI encoded)
    page_limit:10,   // The amount of movie search results to show per page
    page:1,          // The selected page of movie search results  
    apikey:apiKey    // My personalized, fancy shmansy API key for Rotten Tomatoes!
  };
  
  $http({method: 'GET', url:Arg.url(path + endpoint, params)}).
  success(function(data, status, headers, config){
    console.log("Rotten Tomatoes Success: " + JSON.stringify(data));
  }).
  error(function(data, status, headers, config){
    console.log("Rotten Tomatoes Error: " + JSON.stringify(data));
  });
  console.log("Rotten Tomatoes URL: " + Arg.url(path + endpoint, params));
  
}
 
 
/* Function object declaration for hitting the Grooveshark API 
 *
 * @params query - String that has the query for Grooveshark
 * @author Stephen Brough
 *
 */
function grooveShark(query){}
 