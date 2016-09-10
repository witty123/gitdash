'use strict';

/**
* pusheventSearch 
* Inject $http as a dependancy in pusheventSearch service 
* This service returns two methods:
* getpushEvent : returns events of a user in JSON format which contains different
* types of events (including push events)
* getSearch : returns user access token from express
**/

angular.
  module('pusheventList').
  service('pusheventSearch', ['$http', function($http){
  return ({
    getpushEvent: function(user, access_token){
      return ($http.get("https://api.github.com/users/" + user +  
        "/events?page=1&per_page=300&access_token=" + access_token));
    },
    getSearch: function () {
      return ($http.get("/api"));
    }
  });
  }]);
