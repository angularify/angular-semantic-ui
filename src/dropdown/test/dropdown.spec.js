describe('dropdown', function () {
  var element, $scope;

  beforeEach(module('angularify.semantic.dropdown'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<div>' +
        '<dropdown title="No value" ng-model="dropdown_model">' +
          '<dropdown-group value="key"' +
                          'title="title"' +
                          'ng-repeat="(key, title) in dropdown_items">' +
            '{{ title }}' +
          '</dropdown-group>' +
        '</dropdown>' +
      '</div>');

    scope = $rootScope;
    scope.dropdown_model = '';
    scope.dropdown_items = {};
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should create element with default header', inject(function($compile, $rootScope) {
    var header = element.find('div.dropdown > div');
    expect(header.eq(0).text()).toBe('No value');
  }));

  it('should have right amount of options', inject(function($compile, $rootScope) {
    var items = element.find('.menu > div.item');
    expect(items.length).toBe(0);

    scope.$apply(function() {
      scope.dropdown_items = [{'item1': 'Cool item1'}, {'item2': 'Cool item2'}];
    });

    items = element.find('.menu > div.item');
    expect(items.length).toBe(2);

  }));

  it('should change model value when user choose option', inject(function($compile, $rootScope) {
    scope.$apply(function() {
      scope.dropdown_items = {'item1': 'Cool item1',
                              'item2': 'Cool item2'};
    });

    var dropdown = element.find('.dropdown');
    dropdown.click();

    var option1 = element.find('.menu > div.item').eq(0);
    option1.click()
    expect(scope.dropdown_model).toBe('item1');

  }));

  it('should add classes to selected item', inject(function($compile, $rootScope) {
      scope.$apply(function() {
        scope.dropdown_items = {'item1': 'Cool item1',
                                'item2': 'Cool item2'};
      });

      var dropdown = element.find('.dropdown');
      dropdown.click();

      var option1 = element.find('.menu > div.item').eq(0);
      var option2 = element.find('.menu > div.item').eq(1);

      option1.click()
      expect(option1.is('.active, .selected')).toBe(true);
      expect(option2.is('.active, .selected')).toBe(false);

      option2.click()
      expect(option1.is('.active, .selected')).toBe(false);
      expect(option2.is('.active, .selected')).toBe(true);
  }))

  it('should change element header when user choose option', inject(function($compile, $rootScope) {
    scope.$apply(function() {
      scope.dropdown_items = {'item1': 'Cool item1',
                              'item2': 'Cool item2'};
    });

    var dropdown = element.find('.dropdown');
    dropdown.click();

    var option1 = element.find('.menu > div.item').eq(0);
    option1.click()

    var header = element.find('div.dropdown > div');
    expect(header.eq(0).text()).toBe('Cool item1');

  }));

});
