( function() {
'use strict';
  angular.module("CustomFactoryModule", [] )
  .controller("UnlimitedController", UnlimitedController)
  .controller("LimitedController", LimitedController)
  .factory('CustomFactory', CustomFactory);

  UnlimitedController.$inject = ['CustomFactory'];
  function UnlimitedController(CustomFactory) {
    var unlimitedCtrl = this;
    var customFactory = CustomFactory();
    unlimitedCtrl.items = customFactory.getItems();
    unlimitedCtrl.itemName = " ";
    unlimitedCtrl.itemQuantity = " ";

    unlimitedCtrl.addItem = function() {
      customFactory.addItem(unlimitedCtrl.itemName, unlimitedCtrl.itemQuantity);
    }
    unlimitedCtrl.removeItem = function (index) {
      customFactory.removeItem(index);
    }
  }

  LimitedController.$inject = ['CustomFactory'];
  function LimitedController(CustomFactory) {
    var limitedCtrl = this;
    var customFactory = CustomFactory(3);

    limitedCtrl.items = customFactory.getItems();
    limitedCtrl.itemName = " ";
    limitedCtrl.itemQuantity = " ";

    limitedCtrl.addItem = function() {
      customFactory.addItem(limitedCtrl.itemName, limitedCtrl.itemQuantity);
      console.log("here");
    }


    limitedCtrl.removeItem = function (index) {
      customFactory.removeItem(index);
    }
  }
  // UnlimitedController.$inject = ['CustomFactory'];
  // function UnlimitedController(CustomFactory) {
  //   var unlimitedCtrl = this;
  //   var customFactory = CustomFactory();
  //
  //   unlimitedCtrl.itemName = " ";
  //   unlimitedCtrl.itemQuantity = " ";
  //
  //   unlimitedCtrl.addItem = function() {
  //     customFactory.addItems(unlimitedCtrl.itemName, unlimitedCtrl.itemQuantity);
  //
  //   }
  //   unlimitedCtrl.items = customFactory.getItem();
  //
  //   unlimitedCtrl.remove = function(index) {
  //     customFactory.removeItem(index);
  //   }
  // }

  function CustomFactory() {

    var factory = function(maxItems) {
        return new Service(maxItems);
    };
    return factory;

  }

  function Service(maxItems) {
    var service = this;

    var items = [];
    service.addItem = function(itemName, itemQuantity) {
      if ( maxItems === undefined ||
          (maxItems !== undefined && items.length < maxItems) ) {
            var item = { name : itemName, quantity : itemQuantity };
            items.push(item);
          }

      else {
        throw new Error("max limit reached");
      }
    };
    service.getItems = function() {
      return items;
    };

    service.removeItem = function(index) {
      items.splice(index, 1);
    };

  }

})();
