ngDescribe(
  {
    name: 'rating',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate"></rating>',
    tests: function(deps) {
      it('should have rate == 0', function() {
        var scope = deps.element.isolateScope();
        var vm = scope.vm;
        expect(deps.element.is('.ui.rating')).toBeTruthy();
        expect(vm.ngModel).toEqual(0);
      });
      it('should be updatable', function() {
        var scope = deps.element.scope();
        deps.element.children('i:nth(0)').click()
        expect(scope.rate).toEqual(1);
        deps.element.children('i:nth(0)').click()
        expect(scope.rate).toEqual(1);
        deps.element.children('i:nth(3)').click()
        expect(scope.rate).toEqual(4);
        deps.element.children('i:nth(2)').click()
        expect(scope.rate).toEqual(3);
        deps.element.children('i:nth(1)').click()
        expect(scope.rate).toEqual(2);
        deps.element.children('i:nth(4)').click()
        expect(scope.rate).toEqual(5);
      });
    }
  }
)(
  {
    name: 'rating',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" clearable="true"></rating>',
    tests: function(deps) {
      it('should be clearable', function() {
        var scope = deps.element.scope();
        deps.element.children('i:nth(0)').click()
        expect(scope.rate).toEqual(1);
        deps.element.children('i:nth(0)').click()
        expect(scope.rate).toEqual(0);
        deps.element.children('i:nth(3)').click()
        expect(scope.rate).toEqual(4);
        deps.element.children('i:nth(2)').click()
        expect(scope.rate).toEqual(3);
        deps.element.children('i:nth(2)').click()
        expect(scope.rate).toEqual(0);
        deps.element.children('i:nth(1)').click()
        expect(scope.rate).toEqual(2);
        deps.element.children('i:nth(1)').click()
        expect(scope.rate).toEqual(0);
        deps.element.children('i:nth(4)').click()
        expect(scope.rate).toEqual(5);
        deps.element.children('i:nth(4)').click()
        expect(scope.rate).toEqual(0);
        deps.element.children('i:nth(4)').click()
        expect(scope.rate).toEqual(5);
      });
    }
  }
)(
  {
    name: 'rating with max 1',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" max="1"></rating>',
    tests: function(deps) {
      it('should be clearable', function() {
        var scope = deps.element.scope();
        deps.element.children('i').click()
        expect(scope.rate).toEqual(1);
        deps.element.children('i').click()
        expect(scope.rate).toEqual(0);
        deps.element.children('i').click()
        expect(scope.rate).toEqual(1);
      });
    }
  }
)(
  {
    name: 'rating with initial value',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate"></rating>',
    parentScope: {
      rate: 2
    },
    tests: function(deps) {
      it('should have rate == 2', function() {
        var scope = deps.element.scope();
        expect(scope.rate).toEqual(2);
        deps.element.children('i:last').click()
        expect(scope.rate).toEqual(5);
        deps.element.children('i:last').click()
        expect(scope.rate).toEqual(5);
        deps.element.children('i:first').click()
        expect(scope.rate).toEqual(1);
      });
    }
  }
)(
  {
    name: 'rating with max = 10',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" max="10"></rating>',
    parentScope: {
      rate: 12
    },
    tests: function(deps) {
      it('should have 10 icons', function() {
        var scope = deps.element.isolateScope();
        var vm = scope.vm;
        expect(vm.ngModel).toEqual(10);
        expect(deps.element.children('i.icon').length).toEqual(10);
      });
    }
  }
)(
  {
    name: 'rating hearts',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="hearts"></rating>',
    tests: function(deps) {
      it('should display hearts', function() {
        expect(deps.element.is('.hearts')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating star',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="star"></rating>',
    tests: function(deps) {
      it('should display star', function() {
        expect(deps.element.is('.star')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating mini',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="mini"></rating>',
    tests: function(deps) {
      it('should display mini', function() {
        expect(deps.element.is('.mini')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating tiny',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="tiny"></rating>',
    tests: function(deps) {
      it('should display tiny', function() {
        expect(deps.element.is('.tiny')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating small',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="small"></rating>',
    tests: function(deps) {
      it('should display small', function() {
        expect(deps.element.is('.small')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating large',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="large"></rating>',
    tests: function(deps) {
      it('should display large', function() {
        expect(deps.element.is('.large')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating huge',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="huge"></rating>',
    tests: function(deps) {
      it('should display huge', function() {
        expect(deps.element.is('.huge')).toBeTruthy();
      });
    }
  }
)(
  {
    name: 'rating massive',
    modules: 'angularify.semantic.rating',
    element: '<rating ng-model="rate" class="massive"></rating>',
    tests: function(deps) {
      it('should display massive', function() {
        expect(deps.element.is('.massive')).toBeTruthy();
      });
    }
  }
);

