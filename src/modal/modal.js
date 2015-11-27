'use strict';

angular.module('angularify.semantic.modal', [])

.directive('modal', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: 'ngModel',
        template: '<div class="ui modal" ng-transclude></div>',
        link: function (scope, element, attrs, ngModel) {
	      var options = {
            onHide: function () {
                ngModel.$setViewValue(false);
            }
          };
          if (scope.additionalOptions != undefined) {
              for (var attrname in scope.additionalOptions) { options[attrname] = scope.additionalOptions[attrname]; }
          }
          element.modal(options);
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
