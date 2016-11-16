"use strict";

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [
    {
      id: 0,
      task : "mow the lawn",
      isCompleted: true,
      assignedTo: "Dani"
    },
     {
      id: 1,
      task : "grade quizzes",
      isCompleted: false,
      assignedTo: "Zoe"
    },
     {
      id: 2,
      task : "take nap",
      isCompleted: false,
      assignedTo: "Nathan"
    }
  ];

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
  $scope.newTask.id = $scope.items.length;
  console.log("new task in Function", $scope.newTask);
  $scope.items.push($scope.newTask);
  $scope.newTask = "";
  $scope.showListView = true;
}


});