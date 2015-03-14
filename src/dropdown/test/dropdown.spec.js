describe('dropdown', function () {
    var $scope;

    beforeEach(module('angularify.semantic.dropdown'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));

    describe('controller', function () {
        var ctrl, $element, $attrs;

        beforeEach(inject(function($controller) {
          $attrs = {}; $element = {};
          ctrl = $controller('DropDownController', { $scope: $scope });
        }));

        describe('add_item', function() {
            it("DropDownController add_item test", function(){
                var acc1, acc2;
                ctrl.add_item(acc1 = $scope.$new());
                ctrl.add_item(acc2 = $scope.$new());
                expect($scope.items.length).toBe(2);
            });
        });

        describe('remove_item', function(){
            it("DropDownController remove_item test", function(){
                var acc1, acc2;
                ctrl.add_item(acc1 = $scope.$new());
                ctrl.add_item(acc2 = $scope.$new());
                ctrl.remove_item(acc2);
                expect($scope.items.length).toBe(1);
            })
        });

        describe('update_title', function () {
            it("DropDownController update_title test", function () {
                var scope = $scope.$new();
                ctrl.add_item(scope);
                ctrl.update_title('title');
                expect(scope.title).toBe('title');
            })
        });
    });
});
