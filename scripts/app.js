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
  .config(function ($routeProvider) {
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
  });
