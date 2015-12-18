'use strict';

angular.module('angularify.semantic.modal', [])

.directive('modal', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: 'ngModel',
        scope: {
            class: '@'
        },
        template: '<div class="{{modal_class}}" ng-transclude></div>',
        link: function (scope, element, attrs, ngModel) {
          scope.modal_class = 'ui modal';
          if (scope.class !== undefined)
              scope.modal_class += ' '+scope.class;

          element.modal({
            onHide: function () {
              ngModel.$setViewValue(false);
            }
          });
          scope.$watch(function () {
            return ngModel.$modelValue;
          }, function (modelValue){
            element.modal(modelValue ? 'show' : 'hide');
          });
          scope.$on('$destroy', function() {
            element.modal('hide');
            element.remove();
          });
        }
    }
});
