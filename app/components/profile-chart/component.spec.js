describe('profileChart', function() {

  // Load the module that contains the `profileChart` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('ProfileChartController', function() {

    it('should check if profile loaded or not', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('profileChart', {$scope: $scope});
      expect($scope.userData).toBeDefined();
    }));
  });
});