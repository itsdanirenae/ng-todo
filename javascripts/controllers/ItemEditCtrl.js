"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemFactory){
  $scope.newTask = {};
    let itemId = $routeParams.id;


  ItemFactory.getSingleItem(itemId).then(function(oneItem){
    oneItem.id = itemId;
    $scope.newTask = oneItem;
  });

   $scope.addNewItem = function (){
    ItemFactory.editItem($scope.newTask).then(function(response){
      $scope.newTask = {}; //this clears out value
      $location.url("/items/list");
    });
   };
});