'use strict';

// Register `pusheventList` component, along with its associated controller and template
angular.
  module('pusheventList').
  component('pusheventList', {
    templateUrl: 'pushevent-list/template.html',
    controller: ['$scope', '$http', 'pusheventSearch', 
    function PusheventListController($scope, $http, pusheventSearch) {
      $scope.pushEvents = [];
      $scope.userLoaded = true;

      var userDataPromise = pusheventSearch.getSearch();
      userDataPromise.then( 
        function(payLoad){
          $scope.userName = payLoad.data.username;
          $scope.access_token = payLoad.data.access_token;
          var pushDataPromise = pusheventSearch.getpushEvent($scope.userName, 
            $scope.access_token);
          pushDataPromise.then( 
            function(payLoad){
              for(var d = 0; d < payLoad.data.length; d++)
                {
                  if(payLoad.data[d].type === 'PushEvent')
                  {
                    $scope.pushEvents.push(payLoad.data[d]);
                  }
                }
          });
        });
    }]
});