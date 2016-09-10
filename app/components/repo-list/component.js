'use strict';

// Register `repoList` component, along with its associated controller and 
// template

/**
* Inject $scope, $http and repoSearch custom service in the controller
* RepoListController
* repoSearch service updates $scope.repoData array which is used for 
* updating the repo list panel. 
**/

angular.
  module('repoList').
  component('repoList', {
    templateUrl: 'repo-list/template.html',
    controller: ['$scope', '$http', 'repoSearch', 
    function RepoListController($scope, $http, repoSearch) {
      $scope.reposLoaded = false;
      $scope.userLoaded = false;
      $scope.userName = {};
      $scope.access_token = {};
      $scope.repoData = [];

      var userDataPromise = repoSearch.getSearch();
      userDataPromise.then(
        function (payLoad) {
          $scope.userName = payLoad.data.username;
          $scope.access_token = payLoad.data.access_token;
          var repoDataPromise = repoSearch.getRepo($scope.userName,
           $scope.access_token);
          repoDataPromise.then(
            function(payLoad){
              $scope.repoData = payLoad.data;
              $scope.reposLoaded = true;
          });
      });
      $scope.predicate = '-updated_at';
    }]
});
