'use strict';

angular.module('angularify.semantic.dropdown', [])

.controller('DropDownController', ['$scope', function($scope){

}])

.directive("dropdown", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: 'DropDownController',
        scope: {
            title : "@",
            open : "@"
        },
        template: "<div class=\"{{dropdown_class}}\">" +
                    "<div class=\"default text\">{{title}}</div>" + 
                    "<i class=\"dropdown icon\"></i>" +
                    "<div class=\"menu\" ng-transclude>" +
                    "</div>" +
                  "</div>",
        link: function(scope, element, attrs){
            scope.dropdown_class = 'ui selection dropdown';

            if (scope.open == "true"){
                scope.open = true;
                scope.dropdown_class = scope.dropdown_class + ' active visible'; 
            }
            else
                scope.open = false;

            //
            // Click handler
            //
            element.bind('click', function(){
                if (scope.open == false){
                    scope.open = true;
                    scope.$apply(function(){scope.dropdown_class = 'ui selection dropdown active visible'}); 
                } else {
                    scope.open = false;
                    scope.$apply(function(){scope.dropdown_class = 'ui selection dropdown'});
                } 
            });
        }
    }
})

.directive("dropdownGroup", function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: '^dropdown',
        template: '<div class="item" ng-transclude></div>',
        link: function(scope, element, attrs){

        }
    }
});