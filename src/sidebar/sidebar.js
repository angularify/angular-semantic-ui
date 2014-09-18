'use strict';

angular.module('angularify.semantic.sidebar', [])
.directive('sidebar', function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        template: '<div class="ui sidebar" ng-transclude></div>',
        scope: {
            buttonClass : '='
        },
        link: function(scope, element, attrs){
            debugger;
            element.sidebar('attach events', scope.buttonClass);
        }
    }
});
