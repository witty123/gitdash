'use strict';

// Register `pusheventList` component, along with its associated controller and template
angular.
  module('pusheventList').
  component('pusheventList', {
    templateUrl: 'pushevent-list/template.html',
    controller: function PusheventListController($scope, $http) {
    	$http.get("/api")
        .success(function ( user ) {
          $scope.userLoaded = true;
          $scope.pushEvents = [];
          $scope.url = "https://api.github.com/users/" + user.username +  "/events?page=1&per_page=300&access_token=" + user.access_token;    
          $http.get($scope.url)
            .success(function (eventData){
              for(var d = 0; d < eventData.length; d++)
                {
                	if(eventData[d].type == 'PushEvent')
                  {
                    $scope.pushEvents.push(eventData[d]);
                  }
                }
            });
        });
    }
});