'use strict';

angular.
  module('profileChart').
  service('profileSearch', ['$http', function($http){
	return {
    getSearch: function () {
	    return ($http.get("/api"));
	  }
	};
  }]);