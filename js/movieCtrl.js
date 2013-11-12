/*
 *  movieCtrl.js
 *  
 *  Controller for the Aggregate Movie App Thingy
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: November 10, 2013
 */
 
 // Freebase API stuff
 var freeBaseApiKey = "AIzaSyDMH4mMetvW-Oa-skN49ynGFAcMsqIDEgY";
 var version = "v1sandbox"; // use 'v1' for production
 var apiname = "search"; // 'mqlread', 'search', 'topic'
 var freeBaseURI = "https://www.googleapis.com/freebase/"+version+"/"+apiname+"?query=";
 
 // App specific vars
 var app = angular.module('movieApp', []);
 var query = "";
 
 // Main Angular controller for this app
 app.controller('movieCtrl', function($scope, $http){
		$scope.message = "Test";
		
		// Keyup callback for the search input
		$scope.keyUp = function(keyEvent) {
			$scope.message = $scope.movieSearch;
			console.log('keyup', keyEvent); // FOR TESTING
      query = encodeURIComponent($scope.message);
      
      // Only run the HTTP request if there is something to request
      if (query != null && query != "" && typeof query != undefined) {
      // Using Angular's $http service to make an HTTP request based on what the user has entered
      $http({method: 'GET', url: freeBaseURI + query}).
        success(function(data, status, headers, config) {          
          // Log everything for testing
          console.log("Data: " + data.result[0].name);
          $scope.result = data.result[0].name;
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
        console.log("Uri: " + freeBaseURI + query);
        }
      }; // End keyup callback
      
 }); // End controller
 
/* Function object declaration for hitting the Freebase Google API 
 *
 * @params query - String that has the query for Freebase
 * @author Stephen Brough
 *
 */
function freeBase(query){}
 
/* Function object declaration for hitting the Rotten Tomatoes API 
 *
 * @params query - String that has the query for Rotten Tomatoes
 * @author Stephen Brough
 *
 */
function rottenTomaties(query){
  
 }
 
 
/* Function object declaration for hitting the Grooveshark API 
 *
 * @params query - String that has the query for Grooveshark
 * @author Stephen Brough
 *
 */
function grooveShark(query){}
 