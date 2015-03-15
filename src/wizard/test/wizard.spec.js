describe('wizard', function () {

  beforeEach(module('angularify.semantic.wizard'));
  
  describe('controller', function () {
    var controller,
        scope;

    beforeEach(inject(function ($controller, $rootScope) {    
      scope = $rootScope.$new();
      controller = $controller('WizardController', { $scope: scope });
    }));

    describe('with 2 steps', function() {
      it("should contain 2 steps", function () {
        controller.addStep({ title: 'step1' });
        controller.addStep({ title: 'step2' });
        expect(scope.steps.length).toBe(2);
      });
    });
  });

  describe('directive (wizard)', function () {
    var controller,
        scope,
        elm;
    
    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope;
      elm = angular.element('<wizard fullwidth="true">' + 
                              '<wizard-pane title="Step1"><h1>Step 1</h1></wizard-pane>' +
                              '<wizard-pane title="Step2"><h1>Step 2</h1></wizard-pane>' +
                              '<wizard-pane title="Step3"><h1>Step 3</h1></wizard-pane>' +
                            '</wizard>');
      $compile(elm)(scope);
      scope.$digest();
    }));
               
    it('should create a .steps div', function () {
      expect(elm.find('.steps').length).toBe(1);
    });
    
    it('should create a have class `three`', function () {
      expect(elm.find('.steps').hasClass('three')).toBeTruthy();
    });
    
    it('should contain 3 wizard pane', function () {
      expect(elm.find('.ui.segment').length).toBe(3);
    });    
  });
  
  describe('directive (wizard-pane)', function () {
    var controller,
        scope,
        elm,
        subElm;
    
    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope;
      elm = angular.element('<wizard fullwidth="true"></wizard>');
      subElm = angular.element('<wizard-pane title="Step1"><h1>Step 1</h1></wizard-pane>');
      
      elm.append(subElm);

      $compile(elm)(scope);
      scope.$digest();
    }));
               
    
    it('should contain a h1', function () {
      expect(elm.find('h1').length).toBe(1);
    });    
  });
});