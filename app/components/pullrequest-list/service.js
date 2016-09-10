'use strict';

/**
* pullrequestSearch 
* Inject $http as a dependancy in activitySearch service 
* This service returns two methods:
* getpullEvent : returns events of a user in JSON format which contains different
* types of events (including pullrequest events)
* confirmpullEvent : returns JSON data which contains the information about
* particular pull request
* getSearch : returns user access token from express
**/


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
