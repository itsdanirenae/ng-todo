"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [];

let getItems = function(){
   ItemFactory.getItemList().then(function(fbItems){
    $scope.items = fbItems;
  });
}

getItems();

$scope.allItems = function(){
  console.log("you clicked all items")
  $scope.showListView = true;
}

$scope.newItem = function(){
  console.log("you clicked new item")
  $scope.showListView = false;
}

$scope.addNewItem = function(){
  $scope.newTask.isCompleted = false;
  // $scope.newTask.id = $scope.items.length;
  console.log("new task in Function", $scope.newTask);
  // $scope.items.push($scope.newTask);
  ItemFactory.postNewItem($scope.newTask).then(function(itemId){
    getItems();
    $scope.newTask = "";
    $scope.showListView = true;
  })
}

$scope.deleteItem = function(itemId){ //passed this in on click here and in HTML - we delete item.id in html and this is why we created items with ids
  console.log("you deleted me");
  ItemFactory.deleteItem(itemId).then(function(response){
    getItems(); //once it is deleted then refresh the DOM
  })
}

});