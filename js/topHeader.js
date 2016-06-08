angular.module('portApp')
.directive('topHeader', function () {
  return {
    restrict: 'EA',
    templateUrl: './views/header.html',
    // scope: {
    //   toggle: '&',
    // },
    // controller: function ($scope) {
    //   $scope.isActive = 'true'
    // }
    link: function (scope, elem, attrs) {
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
      }
})
