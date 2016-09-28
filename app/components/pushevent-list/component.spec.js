describe('pusheventList', function() {

  // Load the module that contains the `pusheventList` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('PusheventListController', function() {

    it('should load pushevent', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('pusheventList', {$scope: $scope});
      expect($scope.pushEvents).toBeDefined();
    }));

  });

});