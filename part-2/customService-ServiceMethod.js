(function(){

  angular.module('CustomServiceModule1', [])
  .controller('ShowController', ShowControllerFunction)
  .controller('AddController', AddControllerFunction)
  .service('CustomService', CustomServiceFumction);

  AddControllerFunction.$inject = ['CustomService'];
  function AddControllerFunction(CustomService) {
    var addCtrl = this;
    addCtrl.name = "";
    addCtrl.quantity = "";
    addCtrl.addItem = function() {
      CustomService.addItems(addCtrl.name, addCtrl.quantity);
    }
  }

  ShowControllerFunction.$inject=['CustomService'];
  function ShowControllerFunction(CustomService) {
    var showCtrl = this;
    showCtrl.items  = CustomService.getItems();
    showCtrl.remove  = function(index){
      CustomService.removeItem(index);
    }
  }


  function CustomServiceFumction() {
    var service = this;
    var items = [];
    service.addItems = function(itemName, itemQuantity) {
      var item = {
        name : itemName,
        quantity : itemQuantity
      };
      items.push(item);
    };
    service.getItems = function() {
      return items;
    };
    service.removeItem = function(index) {
      items.splice(index, 1);
    };
  }

})();
