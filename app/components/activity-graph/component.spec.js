describe('activityGraph', function() {

  // Load the module that contains the `activityChart` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('ActivityGraphController', function() {

    it('should check length of activities', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('activityGraph', {$scope: $scope});
      expect($scope.data.length).toBe(3);
    }));

  });

});