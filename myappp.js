var myApp = angular.module('app', ['ionic', 'app.controllers'])

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller :"homeCtrl"
    })
    .state('detail', {
      url: "/detail",
      templateUrl: "views/detail.html",
      controller :"detailCtrl"  
    });
});
