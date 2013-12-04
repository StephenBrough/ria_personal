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
     Movies.get(function(data) {
       $scope.movies = data;
     });
     
     $scope.orderProp = 'SOMETHINGHERE';
  }]);