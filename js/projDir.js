angular.module('portApp')
.directive('portfolio', function() {
  return {
    restrict: 'A',
    // templateUrl: './views/projects.html',
    scope: {},
    controller: function ($scope) {
      $scope.toShow = function () {
        $scope.now = !$scope.now;
      }
      $scope.animate
    },
    link: function (scope, elem, attrs) {
      elem.parent().on('click', function() {
        // elem.toggleClass('animated fadeOutDown');
        elem.addClass('reveal animated fadeInUp');
      })
      scope.animate = function () {
        elem.addClass('animated fadeOutDown')
      }

      }
    }
})
