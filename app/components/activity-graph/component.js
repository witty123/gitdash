'use strict';

// Register `activityGraph` component, along with its associated controller and
// template
angular.
  module('activityGraph').
  component('activityGraph', {
    templateUrl: 'activity-graph/template.html',
    controller: ['$scope', '$http', 'activitiesSearch', 
    function ActivityGraphController($scope, $http, activitiesSearch) {
      $scope.options = {
            chart: {
                type: 'stackedAreaChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                yAxis: {
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $scope.data = [
            {
                "key" : "PushEvent" ,
                "values" : [ 
                [1469644200000,0],
                [1469730600000,0], 
                [1469817000000,0], 
                [1469989800000,0],
                [1470076200000,0],
                [1470162600000,0],
                [1470249000000,0],
                [1470335400000,0],
                [1470421800000,0],
                [1470508200000,0],
                [1470594600000,0],
                [1470681000000,0],
                [1470767400000,0],
                [1470853800000,0],
                [1470940200000,0],
                [1471026600000,0],
                [1471113000000,0],
                [1471199400000,0],
                [1471285800000,0],
                [1471372200000,0],
                [1471458600000,0],
                [1471545000000,0],
                [1471631400000,0],
                [1471717800000,0],
                [1471804200000,0],
                [1471890600000,0],
                [1471977000000,0],
                [1472063400000,0],
                [1472149800000,0],
                [1472236200000,0],
                [1472322600000,0],
                [1472409000000,0] 
                ]
            },

            {
                "key" : "PullRequestEvent" ,
                "values" : [ 
                [1469644200000,0],
                [1469730600000,0], 
                [1469817000000,0], 
                [1469989800000,0],
                [1470076200000,0],
                [1470162600000,0],
                [1470249000000,0],
                [1470335400000,0],
                [1470421800000,0],
                [1470508200000,0],
                [1470594600000,0],
                [1470681000000,0],
                [1470767400000,0],
                [1470853800000,0],
                [1470940200000,0],
                [1471026600000,0],
                [1471113000000,0],
                [1471199400000,0],
                [1471285800000,0],
                [1471372200000,0],
                [1471458600000,0],
                [1471545000000,0],
                [1471631400000,0],
                [1471717800000,0],
                [1471804200000,0],
                [1471890600000,0],
                [1471977000000,0],
                [1472063400000,0],
                [1472149800000,0],
                [1472236200000,0],
                [1472322600000,0],
                [1472409000000,0] 
                ]
            },

            {
                "key" : "IssueCommentEvent" ,
                "values" : [ 
                [1469644200000,0],
                [1469730600000,0], 
                [1469817000000,0], 
                [1469989800000,0],
                [1470076200000,0],
                [1470162600000,0],
                [1470249000000,0],
                [1470335400000,0],
                [1470421800000,0],
                [1470508200000,0],
                [1470594600000,0],
                [1470681000000,0],
                [1470767400000,0],
                [1470853800000,0],
                [1470940200000,0],
                [1471026600000,0],
                [1471113000000,0],
                [1471199400000,0],
                [1471285800000,0],
                [1471372200000,0],
                [1471458600000,0],
                [1471545000000,0],
                [1471631400000,0],
                [1471717800000,0],
                [1471804200000,0],
                [1471890600000,0],
                [1471977000000,0],
                [1472063400000,0],
                [1472149800000,0],
                [1472236200000,0],
                [1472322600000,0],
                [1472409000000,0] 
                ]
            }

        ];
      console.log("kya hai");
      var userDataPromise = activitiesSearch.getSearch();
      userDataPromise.then( 
        function(payLoad){
          $scope.userName = payLoad.data.username;
          $scope.access_token = payLoad.data.access_token;
          var activityDataPromise = activitiesSearch.getActivity($scope.userName,
           $scope.access_token);
          activityDataPromise.then(
            function(payLoad){
              for(var d = 0; d < payLoad.data.length; d++)
              {
                for(var i in $scope.data)
                {
                  if($scope.data[i].key === payLoad.data[d].type)
                  {
                    for (var k in $scope.data[i].values)
                    {
                      var date = payLoad.data[d].created_at;
                      date = date.split("T");
                      var dateinms = Date.parse(date[0]);
                      dateinms+=66600000;
                      if($scope.data[i].values[k][0] === dateinms)
                      {
                        $scope.data[i].values[k][1]+=1;
                      }
                    }
                  }
                }
              }
              console.log($scope.data);
            });
        });
    }]
});
