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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/splash', {
        templateUrl: 'views/splash.html'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
