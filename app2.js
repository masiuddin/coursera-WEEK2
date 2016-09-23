(function(){

  angular.module("CustomFilterModule", [])
  .controller("CustomFilterController", customControllercallbackFunction )
  .filter("replaced", CustomFilterFunction);

  customControllercallbackFunction.$inject = ['$scope', 'replacedFilter'];

  function customControllercallbackFunction ($scope, replacedFilter) {
    $scope.name = "masi is a good person with good qualities";
    $scope.name = replacedFilter($scope.name, 'good', 'nice');

    $scope.bottomLine = "going to apply good custom filter in html ";
  }

  function CustomFilterFunction() { // it is  a function constructor
    return function(input, target, data){
      return input.replace(target, data);
    };
  }
})();
