(function(){

// inherited porperties(objects) from parent would not mask them in child it
    //simply refers that object and change value in parent itself Whereas
    // properties like primitive datatypes(strings---) will mask valuee in child
// var parent = {
//   value : 'parentValue',
//   obj : { objValue : 'parent-object-value'},
//   talk : function() {
//     console.log("talking in parent function");
//   }
// };
//
// var child = Object.create(parent);
//
// console.log("child obj:" + child.vlaue );
// //console.log("child talk" + child.talk() );
// console.log("child obj value :" + child.obj.objValue);
//
// console.log("parent obj" + parent.value );
// console.log("parent obj" + parent.obj.objValue );
// console.dir( child);
// console.dir(parent);
// //console.log("parent talk" + parent.talk() );
// //child properties maskig the parent porperties
// console.log("childValue === parentValue" + child.value === parent.value);
// console.log("child.obj === parent.obj" + child.obj === parent.obj);
//
// child.value = "childvalue";
// child.obj.objValue  = "child - object-value"
// console.log("child obj:" + child.value );
// console.log("child obj value :" + child.obj.objValue);
// console.log("parent obj :" + parent.value );
// console.log("parent obj :" + parent.obj.objValue );
//
// console.log("childValue === parentValue" + child.value === parent.value);
// console.log("child.obj === parent.obj" + child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("grandChild.talk():" + grandChild.talk() );

//function constructor
function Dog(name){
  this.name = name;
  console.log("'this' inside dog function is :" + this);
}
var dogobj = new Dog("rambo");
console.log("my dog name is :" +dogobj.name);


})();
