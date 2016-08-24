'use strict';

angular.
  module('pullrequestList').
  service('pullrequestSearch', ['$http', function($http){
  return ({
  	getpullEvent: function(user, access_token){
	  	return ($http.get("https://api.github.com/users/" + user + 
       "/events?page=1&per_page=300&access_token=" + access_token));
	  },
    confirmpullEvent: function(url, access_token){
      return ($http.get(url+ "?access_token=" + access_token));
    },
    getSearch: function () {
	    return ($http.get("/api"));
	  }
	});
  }]);