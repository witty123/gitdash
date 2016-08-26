'use strict';

angular.
  module('languageChart').
  service('languageSearch', ['$http', function($http){
  return ({
    getRepo: function(user, access_token){
      return ($http.get("https://api.github.com/users/" + user +
       "/repos?access_token=" + access_token));
    },
    getSearch: function () {
      return ($http.get("/api"));
    }
  });
  }]);
