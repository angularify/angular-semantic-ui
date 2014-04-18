'use strict';

angular.module('angularify.semantic.rating', [])

.directive('rating', function(){
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            id: "@",
            size: "@",
            type: "@",
            model : '=ngModel'
        },
        template: '<div class={{div_class}}>' + 
                     '<i id="{{id + 1}}" class="{{icon_class}}" ng-click="click(1)" ng-mouseenter="mouse_enter(1)" ng-mouseleave="mouse_leave(1)"></i>' +
                     '<i id="{{id + 2}}" class="{{icon_class}}" ng-click="click(2)" ng-mouseenter="mouse_enter(2)" ng-mouseleave="mouse_leave(2)"></i>' +
                     '<i id="{{id + 3}}" class="{{icon_class}}" ng-click="click(3)" ng-mouseenter="mouse_enter(3)" ng-mouseleave="mouse_leave(3)"></i>' +
                     '<i id="{{id + 4}}" class="{{icon_class}}" ng-click="click(4)" ng-mouseenter="mouse_enter(4)" ng-mouseleave="mouse_leave(4)"></i>' +
                     '<i id="{{id + 5}}" class="{{icon_class}}" ng-click="click(5)" ng-mouseenter="mouse_enter(5)" ng-mouseleave="mouse_leave(5)"></i>' +
                   '</div>',
        link: function(scope, element, attrs){
            if (scope.model == undefined)
                scope.model = 0;

            if (scope.model < 1 && scope.model > 5)
                scope.model = 0;

            // is rating already checked
            var checked = false;
            
            //
            // Set up icon type
            //
            if (scope.type == undefined)
                scope.type = 'star';

            //
            // Set up size
            //
            if (scope.size == undefined) 
                scope.div_class = 'ui rating ' + scope.type;
            else if (scope.size == 'small')
                scope.div_class = 'ui small ' + scope.type + ' rating';
            else if (scope.size == 'large')
                scope.div_class = 'ui large ' + scope.type + ' rating';
            else if (scope.size == 'huge')
                scope.div_class = 'ui huge ' + scope.type + ' rating';

            //
            // set up icon class
            //
            scope.icon_class = 'icon';

            //
            // Handle mouse enter
            //
            scope.mouse_enter = function(icon_index){
                if (checked == true)
                    return;

                var i = 1;
                for (i; i <= icon_index; i++){
                    document.getElementById(scope.id + i).className = 'icon active';
                }

                return;
            };

            //
            // Handle mouse leave
            //
            scope.mouse_leave = function(icon_index){
                if (checked == true)
                    return;

                var i = 1;
                for (i; i <= 5; i++){
                    document.getElementById(scope.id + i).className = 'icon';
                }

                return;
            };

            //
            // Handle click
            //
            scope.click = function(icon_index, mode){
                var i = 1;
                for (i; i <= icon_index; i++){
                    document.getElementById(scope.id + i).className = 'icon active';
                }

                if (icon_index !== 0)
                    checked = true;

                return;
            };

            //
            // Watch for model
            //
            scope.$watch('model', function(val){
                scope.click(val);
            });
        }
    };
});
