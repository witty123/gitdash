'use strict';

// Register `activityChart` component, along with its associated controller and
// template
angular.
  module('activityChart').
  component('activityChart', {
    templateUrl: 'activity-chart/template.html',
    controller: ['$scope', '$http', 'activitySearch', 
    function ActivityChartController($scope, $http, activitySearch) {
      $scope.options = {
        chart: {
          type: 'pieChart',
          height: 490,
          width: 360,
          donut: true,
          labelSunbeamLayout: false,
          x: function(d){return d.key; },
          y: function(d){return d.y; },
          showLabels: false,
          duration: 500,
          legend: {
            margin: {
              top: 5,
              right: 0,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      $scope.data = [
        {
          key: "ForkEvent",
          y: 0
        },
        {
          key: "PushEvent",
          y: 0
        },
        {
          key: "IssueCommentEvent",
          y: 0
        },
        {
          key: "PullRequestEvent",
          y: 0
        },
        {
          key: "CommitCommentEvent",
          y: 0
        },
        {
          key: "DeleteEvent",
          y: 0
        },
        {
          key: "DownloadEvent",
          y: 0
        },
        {
          key: "FollowEvent",
          y: 0
        },
        {
          key: "GistEvent",
          y: 0
        },
        {
          key: "IssuesEvent",
          y: 0
        },
        {
          key: "MemberEvent",
          y: 0
        },
        {
          key: "PublicEvent",
          y: 0
        },
        {
          key: "PullRequestReviewCommentEvent",
          y: 0
        },
        {
          key: "RepositoryEvent",
          y: 0
        },
        {
          key: "TeamAddEvent",
          y: 0
        },
        {
          key: "WatchEvent",
          y: 0
        },
        {
          key: "Other events",
          y: 0
        }
      ];

      var userDataPromise = activitySearch.getSearch();
      userDataPromise.then( 
        function(payLoad){
          $scope.userName = payLoad.data.username;
          $scope.access_token = payLoad.data.access_token;
          var activityDataPromise = activitySearch.getActivity($scope.userName,
           $scope.access_token);
          activityDataPromise.then(
            function(payLoad){
              for(var d = 0; d < payLoad.data.length; d++)
              {
                var flag=0;
                for(var i in $scope.data)
                {
                  if($scope.data[i].key === payLoad.data[d].type)
                  {
                    $scope.data[i].y+=1;
                    flag=1;
                  }
                }
                if(flag===0)
                {
                  $scope.data[16].y+=1;
                }

              }
            });
        });
    }]
});