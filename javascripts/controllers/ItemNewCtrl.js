"use strict";

app.controller("ItemNewCtrl", function($scope, ItemFactory, $location){
  $scope.newTask = {};

$scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask).then(function(itemId) {
            $location.url("/items/list");     //adding a new path once a person adds a new todo
            $scope.newTask = "";
      });
  };
});

