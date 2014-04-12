'use strict';

angular.module('angularify.semantic.modal', [])

.directive('modal', function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            model: '=ngModel'
        },
        template: "<div class=\"{{ modal_class }}\">" + 
                    "<div class=\"ui test modal transition visible active\" style=\"margin-top: -189px;\" ng-transclude>" +
                    "</div>" +
                  "</div>",
        link: function (scope, element, attrs) {
            if (scope.model == true) {
                scope.modal_class = 'ui dimmer page active';
            } else{
                scope.model = false;
                scope.modal_class = 'ui dimmer page';
            }

            scope.$watch('model', function (val) {
                if (scope.model == true) {
                    scope.modal_class = 'ui dimmer page active';
                } else{
                    scope.model = false;
                    scope.modal_class = 'ui dimmer page';
                }
            });
        }
    }
});
