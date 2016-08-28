'use strict';

/**
* pullrequestSearch 
* Inject $http as a dependancy in activitySearch service 
* This service returns two methods:
* getRepo : returns repos of a user in JSON format 
* getSearch : returns user access token from express
**/

angular.
  module('repoList').
  service('repoSearch', ['$http', function($http){
  return ({
    getRepo: function(user, access_token){
      return ($http.get("https://api.github.com/user/repos?access_token=" + access_token));
    },
    getSearch: function () {
      return ($http.get("/api"));
    }
  });
  }]);
