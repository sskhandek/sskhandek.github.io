'use strict';

/**
 * @ngdoc overview
 * @name sujayKhandekarApp
 * @description
 * # sujayKhandekarApp
 *
 * Main module of the application.
 */
angular
  .module('sujayKhandekarApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/splash', {
        templateUrl: 'views/splash.html'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
    
  });
