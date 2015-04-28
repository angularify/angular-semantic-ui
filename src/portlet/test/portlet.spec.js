/* Portlet Directive tests */

describe('Portlet Directive Testing Suite', function() {
	var scope, elem, compile;

	beforeEach(module('angularify.semantic.portlet'));

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		compile = $compile;
	}));

	describe('Portlet Title Validation', function() {

		beforeEach(function() {
			var portletElem = '<portlet title="Test Portlet"></portlet>';
			elem = angular.element(portletElem);
			compile(elem)(scope);
			scope.$digest();
		});

		it('should have title as Test Portlet', function() {
			var _title = elem.find('.header').html();
			expect(_title).toBe('Test Portlet');
		});

		it('should not have title as Sample Portlet', function() {
			var _title = elem.find('.header').html();
			expect(_title).not.toBe('Sample Portlet');
		});
	});

	describe('Portlet without fullscreen option', function() {

		beforeEach(function() {
			var portletElem = '<portlet title="Test Portlet" fullscreen="false"' +
			' settings="true"></portlet>';
			elem = angular.element(portletElem);
			compile(elem)(scope);
			scope.$digest();
		});

		it('should not have fullscreen class', function() {
			expect(elem.find('.fullscreen').length).toBe(0);
		});

		it('should have settings class', function() {
			expect(elem.find('.settings').length).toBe(0);
		});
	});

	describe('Portlet events', function() {
		beforeEach(function() {
			var portletElem = '<div><portlet title="Test Portlet" ' + 
			'fullscreen="true" settings="true" settings-on-click="Load()"></portlet><div>';
			elem = angular.element(portletElem);
			scope.status = 'failed';
			scope.Load = function() {
				scope.status = 'success';
			}
			compile(elem)(scope);
			scope.$digest();
		});

		it('should toggle portlet to fullscreen', function(){
			elem.find('.expand').click();
			expect(elem.find('.expand').length).toBe(0);
		});

		it('should restore portlet to original size on compress click', function(){
			elem.find('.expand').click();
			expect(elem.find('.compress').length).toBe(1);
			expect(elem.find('.expand').length).toBe(0);
			elem.find('.compress').click();
			expect(elem.find('.compress').length).toBe(0);
			expect(elem.find('.expand').length).toBe(1);
		});

		it('should trigger custom function on settings click', function() {
			expect(scope.status).toBe('failed');
			elem.find('.options').click();
			expect(scope.status).toBe('success');
		});

		it('should remove portlet element on close event', function() {
			elem.find('.close').click();
			expect(elem.find('.portlet').length).toBe(0);
		});
	});

	describe('Portlet Description', function() {
		it('should have a h1 tag with Success inside portlet description', function() {
			var portletElem = '<portlet title="Test Portlet">' + 
			'<h1>Success</h1></portlet>';
			elem = angular.element(portletElem);
			compile(elem)(scope);
			scope.$digest();
			expect(elem.find('.description').html()).toBe('<h1 class="ng-scope">Success</h1>');
		});
	});
});











