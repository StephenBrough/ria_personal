/*
 *  movieCtrl.js
 *  
 *  Controller for the Aggregate Movie App
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: November 10, 2013
 */
 
 var app = angular.module('movieApp', []);
 
 app.controller('movieCtrl', function($scope){
		$scope.message = "Test";
		
		// Keyup callback for the search input
		$scope.keyUp = function(keyEvent) {
			$scope.message = $scope.movieSearch;
			console.log('keyup', keyEvent); // FOR TESTING
		};
 });
 
 