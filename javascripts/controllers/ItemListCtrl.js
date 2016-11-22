"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){
  $scope.items = [];

let getItems = function(){
   ItemFactory.getItemList().then(function(fbItems){
    $scope.items = fbItems;
  });
};
getItems();

$scope.deleteItem = function(itemId){ //passed this in on click here and in HTML - we delete item.id in html and this is why we created items with ids
  console.log("you deleted me");
  ItemFactory.deleteItem(itemId).then(function(response){
    getItems(); //once it is deleted then refresh the DOM
  });
};

$scope.inputChange = function(thingy){
  ItemFactory.editItem(thingy).then(function(response){
  });
};

});
