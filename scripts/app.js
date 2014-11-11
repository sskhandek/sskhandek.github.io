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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
