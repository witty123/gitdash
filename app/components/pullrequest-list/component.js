'use strict';

// Register `pullrequestList` component, along with its associated controller and template
angular.
  module('pullrequestList').
  component('pullrequestList', {
    templateUrl: 'pullrequest-list/template.html',
    controller: function PullrequestListController($scope, $http) {
    	$http.get("/api")
        .success(function ( user ) {
          $scope.userLoaded = true;
          $scope.openPullRequests = [];
          $scope.closedPullRequests = [];
          $scope.url = "https://api.github.com/users/" + user.username +  "/events?page=1&per_page=300&access_token=" + user.access_token;    
          $http.get($scope.url)
            .success(function (eventData){
              for(var d = 0; d < eventData.length; d++)
                {
                	if(eventData[d].type == 'PullRequestEvent')
                  {
                    $scope.url = eventData[d].payload.pull_request.url + "?access_token" + user.access_token;
                    $http.get($scope.url)
                      .success(function (pullRequestData){
                        if(pullRequestData.state == "closed")
                        {
                          $scope.closedPullRequests.push(pullRequestData);
                        }
                        else
                        {
                          $scope.openPullRequests.push(pullRequestData);
                        }
                      });
                  }
                }
                console.log($scope.openPullRequests);
                });
        });
    }
});