'use strict';

// Register `pullrequestList` component, along with its associated controller 
// and template

/**
* Inject $scope, $http and pullrequestSearch custom service in the controller
* PullrequestListController
* pullrequestSearch service updates $scope.openPullRequests array and 
* $scope.closedPullRequests array which is used for updating
* the pullrequest list panel. 
**/


angular.
  module('pullrequestList').
  component('pullrequestList', {
    templateUrl: 'pullrequest-list/template.html',
    controller: ['$scope', '$http', 'pullrequestSearch',
     function PullrequestListController($scope, $http, pullrequestSearch) {
          $scope.userLoaded = true;
          $scope.openPullRequests = [];
          $scope.closedPullRequests = [];
          $scope.userName = {};
          $scope.access_token = {};

          var userDataPromise = pullrequestSearch.getSearch();
          userDataPromise.then( 
            function(payLoad){
              $scope.userName = payLoad.data.username;
              $scope.access_token = payLoad.data.access_token;
              var pullDataPromise = pullrequestSearch.getpullEvent(
                $scope.userName, $scope.access_token);
              pullDataPromise.then( 
                function(payLoad){
                  for(var d = 0; d < payLoad.data.length; d++)
                    {
                      if(payLoad.data[d].type === 'PullRequestEvent')
                      {
                        var pullRequestDataPromise = 
                          pullrequestSearch.confirmpullEvent(
                          payLoad.data[d].payload.pull_request.url,
                          $scope.access_token);
                        pullRequestDataPromise.then(
                          function(payLoad){
                            if(payLoad.data.state === "closed")
                            {
                              $scope.closedPullRequests.push(payLoad.data);
                            }
                            else
                            {
                              $scope.openPullRequests.push(payLoad.data);
                            }
                          });
                      }
                    }
              });
            });
    }]
});
