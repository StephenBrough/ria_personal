/*
 *  controllers.js
 *  
 *  The controllers module for the Aggregate Movie App Thingy.
 *
 *  author: Stephen Brough
 *  version: 0.1
 *  Date: December 3, 2013
 */
 
var ctrls = angular.module('controllers', []);  
   
ctrls.controller('MovieCtrl', ['$scope', 'Movies', function($scope, Movies) {
   $scope.keyUp = function(keyEvent) {			
			query = $scope.movieSearch;      
      if (query != null && query != "" && typeof query != undefined)      
        Movies.get(query, function(data) {
          $scope.movies = data;
        });
   }   
      
     //$scope.orderProp = 'SOMETHINGHERE';
}]);
 