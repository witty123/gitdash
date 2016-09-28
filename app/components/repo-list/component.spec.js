describe('repoList', function() {

  // Load the module that contains the `repoList` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('RepoListController', function() {

    it('should load repos', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('repoList', {$scope: $scope});
      expect($scope.reposLoaded).toBeDefined();
    }));

  });

});