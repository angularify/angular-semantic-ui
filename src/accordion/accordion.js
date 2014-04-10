'use strict';

angular.module('angularify.semantic.accordion', [])

.controller('AccordionController', ['$scope', function($scope){
    $scope.accordions = [];

    this.add_accordion = function(scope) {
        $scope.accordions.push(scope);
        
        scope.$on('$destroy', function (event) {
            this.remove_accordion(scope);
        });
        
        return $scope.accordions;
    }

    this.closeAll = function(scope) {
        var i = 0;
        var isCloseAll = false;

        var index = $scope.accordions.indexOf(scope);

        for (i in $scope.accordions){
            if ($scope.accordions[i].close)
                isCloseAll = true;
        }

        if (isCloseAll == true){
            for (i in $scope.accordions){
                if (i == index){} else {
                    $scope.accordions[i].class = 'title';
                    $scope.accordions[i].content_class = 'content'; 
                }
            }

            return true;
        }

        return false;

    }

    this.remove_accordion = function(scope) {
      var index = $scope.accordions.indexOf(scope);
      if ( index !== -1 )
        $scope.accordions.splice(index, 1);
    }

    this.is_close_all = function() {
        var i = 0;
        
        for (i in $scope.accordions){
            if ($scope.accordions[i].close == 'true')
                return true;
        }
        return false;
    }
}])

.directive('accordion', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: 'AccordionController',
        scope: {
            'close': '@'
        },
        template: "<div class=\"ui accordion\" ng-transclude></div>",
        link: function(scope, element, attrs, AccordionController) {
            AccordionController.add_accordion(scope);
        }
    }
})

.directive('accordionGroup', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope : {
            title:  '@',
            open: '@'
        },
        require:'^accordion',
        template: "<div class=\"ui accordion\">\
                   <div class=\"{{class}}\" ng-click=\"click_on_accordeon_tab()\"> \
                     <i class=\"dropdown icon\"></i> \
                     {{ title }} \
                   </div> \
                   <div class=\"{{content_class}}\" ng-transclude> \
                   </div> \
                   </div>",

        link: function(scope, element, attrs, AccordionController) {
            scope.isOpen = attrs.open;

            if (scope.isOpen == undefined)
                scope.isOpen = false;

            // set up active
            if (attrs.open === 'true'){
                scope.class = 'active title';
                scope.content_class = 'active content';
            }
            else{ 
                scope.class = 'title';
                scope.content_class = "content";
            }
            
            AccordionController.add_accordion(scope);

            //
            // Click handler
            //
            scope.click_on_accordeon_tab = function(){
                // class all first of all
                AccordionController.closeAll(scope)

                if (scope.content_class == 'active content') {
                    scope.class = 'title';
                    scope.content_class = 'content';
                } else {
                    scope.class = 'active title';
                    scope.content_class = 'active content';           
                }     
            }
        }
    }
});