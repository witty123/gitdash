'use strict';

// Register `languagechart` component, along with its associated controller and 
// template

/**
* Inject $scope, $http and languageSearch custom service in the controller
* LanguageChartController
* languageSearch service updates $scope.data array which is used for updating
* the activity chart. 
**/

angular.
  module('languageChart').
  component('languageChart', {
    templateUrl: 'language-chart/template.html',
    controller: ['$scope', '$http', 'languageSearch',
     function LanguageChartController($scope, $http, languageSearch) {
      $scope.repoUrls = {};
      $scope.reposLoaded = {};
      $scope.userName = {};
      $scope.access_token = {};
      $scope.repoData = {};
      $scope.options = {
        chart: {
          type: 'pieChart',
          height: 490,
          width:360,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: false,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: false,
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
            key: "JavaScript",
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
        function(expressData){
          $scope.userName = expressData.data.username;
          $scope.access_token = expressData.data.access_token;
          var repoDataPromise = languageSearch.getRepo($scope.userName,
           $scope.access_token);
          repoDataPromise.then(
            function(repos){
              $scope.repoData = repos.data;
              $scope.reposLoaded = true;
              for(var repo = 0; repo < repos.data.length; repo++)
              {
                if(repos.data[repo].language===null)
                {
                  $scope.data[11].y+=1;
                }
                else
                {
                for(var lang in $scope.data)
                  {
                    if($scope.data[lang].key===repos.data[repo].language)
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
