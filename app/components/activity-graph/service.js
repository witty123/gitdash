'use strict';

/**
acitivitiesSearch 
Inject $http as a dependancy in activitySearch service 
This service returns two methods:
getActicivty: : returns events of a user in JSON format
getSearch : returns user access token from express
**/


angular.
  module('activityGraph').
  service('activitiesSearch', ['$http', function($http){
  return ({
    getActivity: function(user, access_token){
      return ($http.get("https://api.github.com/users/" + user +
        "/events?page=1&per_page=300&access_token=" + access_token));
    },
    getSearch: function () {
      return ($http.get("/api"));
    }
  });
  }]);
