'use strict';

/**
 * @ngdoc function
 * @name sujayKhandekarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sujayKhandekarApp
 */
angular.module('sujayKhandekarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contactLinks = [
      {
        "name": "Facebook",
        "icon":"facebook",
        "link":"https://www.facebook.com/sujay.khandekar"
      },
      {
        "name": "Google+",
        "icon":"fa fa-google-plus fa-2x",
        "link":"https://plus.google.com/105856798281199967470/posts"
      },
      {
        "name": "Twitter",
        "icon":"fa fa-twitter fa-2x",
        "link":"https://twitter.com/sujaykhandekar"
      },
      {
        "name": "LinkedIn",
        "icon":"fa fa-linkedin fa-2x",
        "link":"https://www.linkedin.com/in/sujaykhandekar"
      },
      {
        "name": "Quora",
        "link": "http://www.quora.com/Sujay-Khandekar-1"
      },
      {
        "name": "Resume",
        "icon":"fa fa-file-text-o fa-2x",
        "link":"images/resume.pdf"
      }

    ];

    $scope.companies = [
        "https://pbs.twimg.com/profile_images/568847126793175040/05a1ib0K.png",
        "http://a1031.phobos.apple.com/us/r1000/018/Purple4/v4/a1/2c/40/a12c4071-c770-f925-8fd4-1be7584f9586/V4HttpAssetRepositoryClient-mzl.gflvstsz.png-6095098972935482443.png",
        "http://brandevolutionist.com/wp-content/uploads/2015/04/square-facebook-512.png"
    ];


  });
