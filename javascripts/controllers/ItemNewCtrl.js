"use strict";

app.controller("ItemNewCtrl", function($scope, $rootScope, ItemFactory, $location){
  $scope.newTask = {};

$scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.uid = $rootScope.user.uid;
        ItemFactory.postNewItem($scope.newTask).then(function(itemId) {
            $location.url("/items/list");     //adding a new path once a person adds a new todo
            $scope.newTask = "";
      });
  };
});

