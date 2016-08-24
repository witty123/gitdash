'use strict';

angular.
  module('pusheventList').
  service('pusheventSearch', ['$http', function($http){
  return ({
  	getpushEvent: function(user, access_token){
	  	return ($http.get("https://api.github.com/users/" + user +  "/events?page=1&per_page=300&access_token=" + access_token));
	  },
    getSearch: function () {
	    return ($http.get("/api"));
	  }
	});
  }]);