'use strict';

angular.module('portApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/landing.html'
  }).state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  }).state('portfolio', {
    url: '/portfolio',
    templateUrl: 'views/projects.html'
  }).state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html'
  });
});
'use strict';

angular.module('portApp').directive('about', function () {
  return {
    restrict: 'E',
    templateUrl: './views/about.html'
  };
});
'use strict';

angular.module('portApp').directive('contact', function () {
  return {
    restrict: 'E',
    templateUrl: './views/contact.html'
  };
});
'use strict';

angular.module('portApp').directive('landing', function () {
  return {
    restrict: 'EA',
    templateUrl: 'views/landing.html'
  };
});
'use strict';

angular.module('portApp').directive('portfolio', function () {
  return {
    restrict: 'A',
    // templateUrl: './views/projects.html',
    scope: {},
    controller: function controller($scope) {
      $scope.toShow = function () {
        $scope.now = !$scope.now;
      };
      $scope.animate;
    },
    link: function link(scope, elem, attrs) {
      elem.parent().on('click', function () {
        // elem.toggleClass('animated fadeOutDown');
        elem.addClass('reveal animated fadeInUp');
      });
      scope.animate = function () {
        elem.addClass('animated fadeOutDown');
      };
    }
  };
});
'use strict';

angular.module('portApp').directive('topHeader', function () {
  return {
    restrict: 'EA',
    templateUrl: './views/header.html',
    // scope: {
    //   toggle: '&',
    // },
    // controller: function ($scope) {
    //   $scope.isActive = 'true'
    // }
    link: function link(scope, elem, attrs) {
      // scope.isActive = true;
      // scope.toggle = function() {
      //   // scope.isActive = !scope.isActive;
      //   elem.find('span').addClass('active');
      // }
      //
      // elem.on('click', scope.toggle);
      //
      // console.log(scope)
    }
  };
});
'use strict';

angular.module('portApp').controller('ulCtrl', function ($scope, $stateParams) {
  $scope.st = $stateParams;
});
'use strict';

angular.module('portApp').directive('underline', function () {
  return {
    restrict: 'A',
    scope: {},
    controller: function controller($scope) {},
    link: function link(scope, elem, attrs) {
      elem.parent().on('click', function () {
        elem.removeClass('');
        elem.toggleClass('reveal');
      });
    }
  };
});