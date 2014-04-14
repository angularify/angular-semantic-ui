'use strict';

angular.module('angularify.semantic.sidebar', [])

.controller('SideBarController', ['$scope', function($scope){
    $scope.side_bar_items = [];

    this.add_sidebar_items = function(scope) {
        $scope.side_bar_items.push(scope);
        
        scope.$on('$destroy', function (event) {
            this.remove_side_bar_item(scope);
        });
        
        return $scope.side_bar_items;
    }

    this.remove_side_bar_item = function(scope) {
      var index = $scope.side_bar_items.indexOf(scope);
      if ( index !== -1 )
        $scope.side_bar_items.splice(index, 1);
    }

    this.disactivate_all_items = function(){
        var i = 0;
        for (i in $scope.side_bar_items){
            $scope.side_bar_items[i].item_class = 'item';
        }
    }

}])

.directive('sidebar', function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        controller: 'SideBarController',
        scope: {
            model : '=ngModel'
        },
        template: '<div class="{{sidebar_class}}" ng-transclude></div>',
        link: function(scope, element, attrs, SideBarController){
            scope.sidebar_class = 'ui red vertical demo sidebar menu';

            if (scope.model !== true)
                scope.model = false;

            scope.$watch('model', function(val){
                if (val == true)
                    scope.sidebar_class = 'ui red vertical demo sidebar menu active';
                else
                    scope.sidebar_class = 'ui red vertical demo sidebar menu';
            });
        }
    }
})

.directive('sidebarItem', function(){
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        require:'^sidebar',
        scope: {
            title: "@",
            icon:  "@",
            href:  "@"
        },
        template:  '<a class="{{item_class}}"><i class="{{icon_class}}"></i>{{title}}</a>',
        link: function(scope, element, attrs, SideBarController){
            //if (scope.href == 'undefined')
            //    scope.href = '/#';
                 
            // set up item class
            scope.item_class = 'item';
            
            //
            // Set up icon
            //
            if (scope.icon == undefined)
                scope.icon_class = 'home icon';
            else
                scope.icon_class = scope.icon + ' icon';

            // add new sidebar item
            SideBarController.add_sidebar_items(scope);

            //
            // Handle click
            //
            element.bind('click', function(){
                // make all item innactive
                SideBarController.disactivate_all_items();
                // set up active item
                scope.$apply(function(){scope.item_class = 'active item'});
            });
        }
    }
})