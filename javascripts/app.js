"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
})

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello";
  $scope.showListView = true;
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

});