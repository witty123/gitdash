'use strict';

// Register `repoList` component, along with its associated controller and template
angular.
  module('repoList').
  component('repoList', {
    templateUrl: 'repo-list/template.html',
    controller: function RepoListController($scope, $http) {
    	$scope.reposLoaded = false;

      $scope.userLoaded = false;

      $http.get("/api")
        .success(function ( data ) {
              $scope.url = "https://api.github.com/users/" + data.username + "/repos?access_token=" + data.access_token;
              $http.get($scope.url)
                .success(function (repoUrls){
                  $scope.repoData = repoUrls;
                  $scope.reposLoaded = true;
                });
            });
        
      $scope.predicate = '-updated_at';
    }
});