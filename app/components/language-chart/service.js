'use strict';

/**
languageChart
Inject $http as a dependancy in languageSearch service 
This service returns two methods:
getRepo: : returns events of a user in JSON format
getSearch : returns user access token from express
**/

angular.
  module('languageChart').
  service('languageSearch', ['$http', function($http){
  return ({
    getRepo: function(user, access_token){
      return ($http.get("https://api.github.com/user/repos?access_token=" + access_token));
    },
    getSearch: function () {
      return ($http.get("/api"));
    }
  });
  }]);
