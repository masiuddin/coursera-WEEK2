(function(){
  angular.module("ControllerAsSyntaxModule", [])
  .controller("ParentController", ParentController)
  .controller("ChildController", ChildController);

  ParentController.$inject = ['$scope'];
  function ParentController($scope) {
    // var parent = this;
    // var obj = { value : 'objvalue'};
    // parent.name = "parent-1";
    $scope.name = "parent-1";
  }
  ChildController.$inject = ['$scope'];

  function ChildController($scope) {
    // var child = this;
    // child.name = "child-1";
    // console.log($scope);
    $scope.name = "child-1";
  }
})();
