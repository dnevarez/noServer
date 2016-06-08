angular.module('portApp')
.directive('underline', function() {
  return {
    restrict: 'A',
    scope: {},
    controller: function ($scope) {},
    link: function (scope, elem, attrs) {
      elem.parent().on('click', function() {
        elem.removeClass('')
        elem.toggleClass('reveal');
      });
    }
  }
})
