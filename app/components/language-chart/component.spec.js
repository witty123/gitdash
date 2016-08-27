describe('languageChart', function() {

  // Load the module that contains the `languageChart` component before each test
  beforeEach(module('gitdashApp'));

  // Test the controller
  describe('LanguageChartController', function() {

    it('should check length of languages', inject(function($componentController) {
      var $scope = {};
      var ctrl = $componentController('languageChart', {$scope: $scope});
      expect($scope.data.length).toBe(12);
    }));

  });

});