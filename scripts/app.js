'use strict';
angular.module('sujayKhandekarApp', []);

angular.module('sujayKhandekarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contactLinks = [
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
        "name": "Resume",
        "icon":"fa fa-file-text-o fa-2x",
        "link":"images/resume.pdf"
      }
    ];
  });
