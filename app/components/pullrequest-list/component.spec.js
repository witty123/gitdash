describe('pullrequestList', function() {

  // Load the module that contains the `pullrequestList` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('PullrequestListController', function() {

    it('should load pullrequestevents', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('pullrequestList', {$scope: $scope});
      expect($scope.openPullRequests).toBeDefined();
      expect($scope.closedPullRequests).toBeDefined();

    }));

  });

});