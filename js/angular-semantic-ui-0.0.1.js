angular.module('angularify.semantic', ['angularify.semantic.accordion',
	                                   'angularify.semantic.checkbox',
	                                   'angularify.semantic.dimmer']);

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

angular.module('angularify.semantic.dimmer', [])

.directive("pageDimmer", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope : {
            show : "=?",
            model: '=ngModel'
        },
        template: "<div class=\"{{dimmer_class}}\" ng-click=\"click_on_dimmer()\">" +
                    "<div class=\"content\">" +
                      "<div class=\"center\" ng-transclude></div>" +
                    "</div>" +
                  "</div>",
        link : function(scope, element, attrs, ngModel) {
            
            if (scope.show == true) {
                scope.dimmer_class = 'ui page active dimmer';
            }
            else {
                scope.show = false;
                scope.dimmer_class = 'ui page disable dimmer';
            }

            //
            // Click on dimmer handler
            //
            scope.click_on_dimmer = function(){
                scope.model = false;
                scope.dimmer_class = 'ui page dimmer';
            }

            //
            // Watch for the ng-model changing
            //
            scope.$watch('model', function(val){
                if (val == false || val == undefined)
                    return;
                else
                    scope.dimmer_class = 'ui page active dimmer';
            });
        }
    };
});

angular.module('angularify.semantic.checkbox', [])

.directive('checkbox', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope :{
            type: "@",
            size: "@",
            checked: "@",
            model: '=ngModel'
        },
        template: "<div class=\"{{checkbox_class}}\">" +
                    "<input type=\"checkbox\">"        +
                    "<label ng-click=\"click_on_checkbox()\" ng-transclude></label>" +
                    "</div>",
        link: function(scope, element, attrs, ngModel) {

            //
            // set up checkbox class and type
            //
            if (scope.type == 'standard' || scope.type == undefined){
                scope.type = 'standard';
                scope.checkbox_class = 'ui checkbox';
            } else if (scope.type == 'slider'){
                scope.type = 'slider';
                scope.checkbox_class = 'ui slider checkbox';
            } else if (scope.type == 'toggle'){
                scope.type = 'toggle';
                scope.checkbox_class = 'ui toggle checkbox';
            } else {
                scope.type = 'standard';
                scope.checkbox_class = 'ui checkbox';
            }

            //
            // set checkbox size
            //
            if (scope.size == 'large'){
                scope.checkbox_class = scope.checkbox_class + ' large';
            } else if (scope.size == 'huge') {
                scope.checkbox_class = scope.checkbox_class + ' huge';
            }

            //
            // set checked/unchecked
            //
            if (scope.checked == 'false' || scope.checked == undefined) {
                scope.checked = false;
            } else {
                scope.checked = true;
                element.children()[0].setAttribute('checked', '');
            }

            //
            // Click handler
            //
            element.bind('click', function () {
                if (scope.checked == true){
                    scope.checked = true;
                    scope.model   = false;
                    element.children()[0].removeAttribute('checked');
                } else {
                    scope.checked = true;
                    scope.model   = true;
                    element.children()[0].setAttribute('checked', 'true');
                }
            });

            //
            // Watch for ng-model
            //
            scope.$watch('model', function(val){
                if (val == undefined)
                    return;

                if (val == true){
                    scope.checked = true;
                    element.children()[0].setAttribute('checked', 'true');
                } else {
                    scope.checked = false;
                    element.children()[0].removeAttribute('checked');
                }
            });
        }
    }
});