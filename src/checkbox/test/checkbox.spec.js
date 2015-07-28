describe('checkbox', function () {
    beforeEach(module('angularify.semantic.checkbox'));

    var $controller;
    var $compile;
    var $rootScope;

    beforeEach(inject(function(_$controller_, _$compile_, _$rootScope_) {
        $controller = _$controller_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('directive', function() {
        it('should require ng-model', function() {
            expect(function() {
                $compile('<checkbox>checkbox\'s label</checkbox>')($rootScope)
            }).toThrow();
        });

        it('should compile when ng-model provided', function() {
            var element = $compile('<checkbox ng-model="value">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();

            expect(element.is('.ui.checkbox')).toBeTruthy()

            expect(element.children().length).toEqual(2);
            expect(angular.element(element.children()[0]).is('input:checkbox')).toBeTruthy();
            expect(element.children('input').is('input:checkbox')).toBeTruthy();
            expect(angular.element(element.children()[1]).is('label')).toBeTruthy();

            expect(element.children('label').text()).toEqual('checkbox\'s label');
            expect(element.find('input').is(':checked')).toBeFalsy();
            expect($rootScope.value).toBeFalsy();

            element.find('input').click();
            expect(element.find('input').is(':checked')).toBeTruthy();
            expect($rootScope.value).toBeTruthy();
        });

        it('should be checked when marked checked', function() {
            var element = $compile('<checkbox ng-model="value" checked="true">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.find('input').is(':checked')).toBeTruthy();
            expect($rootScope.value).toBeTruthy();
        });

        it('should be not checked when marked checked false', function() {
            var element = $compile('<checkbox ng-model="value" checked="false">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.find('input').is(':checked')).toBeFalsy();
            expect($rootScope.value).toBeFalsy();
        });

        it('should be disabled when marked disabled', function() {
            var element = $compile('<checkbox ng-model="value" disabled="true">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.find('input').is(':disabled')).toBeTruthy();

            expect(element.find('input').is(':checked')).toBeFalsy();
            expect($rootScope.value).toBeFalsy();
            element.find('label').click();
            expect(element.find('input').is(':checked')).toBeFalsy();
            expect($rootScope.value).toBeFalsy();
        });

        it('should be enabled when marked disabled false', function() {
            var element = $compile('<checkbox ng-model="value" disabled="false">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.find('input').is(':disabled')).toBeFalsy();
        });

        it('should be large when size is large', function() {
            var element = $compile('<checkbox ng-model="value" class="large">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.is('.large')).toBeTruthy()
        });

        it('should be huge when size is huge', function() {
            var element = $compile('<checkbox ng-model="value" class="huge">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.is('.huge')).toBeTruthy()
        });

        it('should be slider when type is slider', function() {
            var element = $compile('<checkbox ng-model="value" class="slider">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.is('.slider')).toBeTruthy()
        });

        it('should be toggle when type is toggle', function() {
            var element = $compile('<checkbox ng-model="value" class="toggle">checkbox\'s label</checkbox>')($rootScope);
            $rootScope.$digest();
            expect(element.is('.toggle')).toBeTruthy()
        });

    });
});
