'use strict';

/**
profileSearch 
Inject $http as a dependancy in profileSearch service 
This service returns two methods:
getSearch : returns user access token from express
**/

angular.
  module('profileChart').
  service('profileSearch', ['$http', function($http){
    return {
        getSearch: function () {
            return ($http.get("/api"));
        }
    };
  }]);
