'use strict';

// Register `profilechart` component, along with its associated controller and
// template
angular.
  module('profileChart').
  component('profileChart', {
    templateUrl: 'profile-chart/template.html',
    controller: ['$scope', '$http', 'profileSearch',
     function ProfileChartController($scope, $http, profileSearch) {
      $scope.userData = {};
      var userDataPromise = profileSearch.getSearch();
      userDataPromise.then(
        function (payLoad) {
          $scope.userData = payLoad.data;
      });
  }]
});
