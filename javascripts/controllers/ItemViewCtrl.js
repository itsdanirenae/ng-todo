"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory){
  console.log("$routeParams", $routeParams);
  $scope.selectedItem = {};
  let itemId = $routeParams.id;
  console.log("$routeParams", itemId);

  ItemFactory.getSingleItem(itemId).then(function(oneItem){
      oneItem.id = itemId;
      $scope.selectedItem = oneItem;
  });
});