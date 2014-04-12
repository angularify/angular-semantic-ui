var dropdownApp = angular.module('dropdownApp', ['angularify.semantic.dropdown']);

function RootCtrl ($scope) {
	$scope.hello = function(){
		alert('hello');
	}
}

