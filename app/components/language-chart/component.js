'use strict';

// Register `languagechart` component, along with its associated controller and template
angular.
  module('languageChart').
  component('languageChart', {
    templateUrl: 'language-chart/template.html',
    controller: ['$scope', '$http', 'languageSearch', function LanguageChartController($scope, $http, languageSearch) {
      $scope.repoUrls;
      $scope.reposLoaded;
      $scope.userName;
      $scope.access_token;
      $scope.repoData;
      $scope.options = {
        chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      $scope.data = [
        {
            key: "Python",
            y: 0
        },
        {
            key: "HTML",
            y: 0
        },
        {
            key: "Ruby",
            y: 0
        },
        {
            key: "Javascript",
            y: 0
        },
        {
            key: "R",
            y: 0
        },
        {
            key: "php",
            y: 0
        },
        {
            key: "C++",
            y: 0
        },
        {
            key: "Java",
            y: 0

        },
        {
            key: "C#",
            y:0
        },
        {
            key: "CSS",
            y:0
        },
        {
            key: "C",
            y:0
        },
        {
            key: "Others",
            y:0
        }
      ];


      var userDataPromise = languageSearch.getSearch();
      userDataPromise.then( 
        function(payLoad){
          $scope.userName = payLoad.data.username;
          $scope.access_token = payLoad.data.access_token;
          var repoDataPromise = languageSearch.getRepo($scope.userName, $scope.access_token);
          repoDataPromise.then(
            function(payLoad){
              $scope.repoData = payLoad.data;
              $scope.reposLoaded = true;
              for(var repo = 0; repo < payLoad.data.length; repo++)
              {
                if(payLoad.data[repo].language==null)
                {
                  $scope.data[11].y+=1;
                }
                else
                {
                for(var lang in $scope.data)
                  {
                    if($scope.data[lang].key==payLoad.data[repo].language)
                    {
                      $scope.data[lang].y+=1;
                    }
                  }
                } 
              } 
          });
        });
    }
]});