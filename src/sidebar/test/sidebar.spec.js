describe('sidebar', function () {
    var $scope;

    beforeEach(module('angularify.semantic.sidebar'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));

    describe('controller', function () {
        var ctrl, $element, $attrs;
        
        beforeEach(inject(function($controller) {
          $attrs = {}; $element = {};
          ctrl = $controller('SideBarController', { $scope: $scope });
        }));

        describe('add_sidebar_item', function() {
            it("SideBarController add_sidebar_item test", function(){
                var acc1, acc2;
                ctrl.add_sidebar_items(acc1 = $scope.$new());
                ctrl.add_sidebar_items(acc2 = $scope.$new());
                expect($scope.side_bar_items.length).toBe(2);
            });
        });

        describe('remove_side_bar_item', function(){
            it("SideBarController remove_side_bar test", function(){
                var acc1, acc2;
                ctrl.add_sidebar_items(acc1 = $scope.$new());
                ctrl.add_sidebar_items(acc2 = $scope.$new());
                ctrl.remove_side_bar_item(acc2);
                expect($scope.side_bar_items.length).toBe(1);
            })
        });    
    });
});