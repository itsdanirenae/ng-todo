"use strict";


app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){ //routeProvider is angular method that does routes
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/items/list', {
      templateUrl: 'partials/item-list.html',  //this is important how these are spelled here
      controller: 'ItemListCtrl'
    })
    .when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    })
    .when('/items/view/:id', { //putting a : in front tells us that it will change with dif id (can be named anything)
      templateUrl: 'partials/item-view.html',
      controller: 'ItemViewCtrl'
    })
    .when('/items/edit/:id', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl'
    })
    .otherwise('/items/list');
});