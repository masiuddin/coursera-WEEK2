(function(){
  angular.module("Filterclass", [])
  .controller("FilterController", filterController)
  .filter("custom", CustomFilter);

  filterController.$inject = ['$scope','customFilter'];
  function filterController($scope, customFilter) {
    $scope.name = 'masi';
    $scope.name = customFilter('masi');
  }

  function CustomFilter() {
    return function(input) {
      return input.toUpperCase();
    };
  }
})();
