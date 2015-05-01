/* Statistic Directive tests */

describe('Statistic Directive Testing Suite', function() {
	var scope, elem, compile;

	beforeEach(module('angularify.semantic.statistic'));

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		compile = $compile;
	}));

});