'use strict';

// Define the `gitdashApp` module which depends on the other modules which are
// defined in components

angular.module('gitdashApp', [ 
	'ngRoute',
	'repoList',
	'activityChart',
	'languageChart',
	'profileChart', 
    'pullrequestList', 
	'pusheventList',
	'activityGraph'
]);
