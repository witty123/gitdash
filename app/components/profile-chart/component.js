'use strict';

// Register `profilechart` component, along with its associated controller and template
angular.
  module('profileChart').
  component('profileChart', {
    templateUrl: 'profile-chart/template.html',
    controller: function ProfileChartController($scope, $http) {
    	$http.get("/api")
        .success(function(data) {
          $scope.url = "https://api.github.com/users/" + data.username + "?access_token=" + data.access_token;
          $scope.userData = data;  
          console.log($scope.userData);  	
        });
    }
})