describe('accordion', function () {
    var $scope;

    beforeEach(module('angularify.semantic.accordion'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));

    describe('controller', function () {
        var ctrl, $element, $attrs;
        
        beforeEach(inject(function($controller) {
          $attrs = {}; $element = {};
          ctrl = $controller('AccordionController', { $scope: $scope });
        }));

        describe('add_accordion', function() {
            it("AccordionController add_accordion test", function(){
                var acc1, acc2;
                ctrl.add_accordion(acc1 = $scope.$new());
                ctrl.add_accordion(acc2 = $scope.$new());
                expect($scope.accordions.length).toBe(2);
            });
        });

        describe('remove_accordion', function(){
            it("AccordionController remove_accordion test", function(){
                var acc1, acc2;
                ctrl.add_accordion(acc1 = $scope.$new());
                ctrl.add_accordion(acc2 = $scope.$new());
                ctrl.remove_accordion(acc2);
                expect($scope.accordions.length).toBe(1);
            })
        });    
    });
});