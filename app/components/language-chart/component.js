'use strict';

// Register `languagechart` component, along with its associated controller and template
angular.
  module('languageChart').
  component('languageChart', {
    templateUrl: 'language-chart/template.html',
    controller: function LanguageChartController($scope, $http) {
      $scope.repoData;
      $scope.repoUrls;
      $scope.reposLoaded;
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
      $http.get("/api")
      .success(function ( user ) {
        $scope.user = user;
        $scope.url = "https://api.github.com/users/" + user.username + "/repos?access_token=" + user.access_token;
        $http.get($scope.url)
          .success(function (repositoryData){
            $scope.repoData = repositoryData;
            $scope.reposLoaded = true;
            for(var d = 0; d < repositoryData.length; d++)
            {
              if(repositoryData[d].language==null)
              {
                $scope.data[11].y+=1;
              }
              else
              {
              for(var i in $scope.data)
                {
                  if($scope.data[i].key==repositoryData[d].language)
                  {
                    $scope.data[i].y+=1;
                  }
                }
              } 
            } 
          });
      });
    }
});