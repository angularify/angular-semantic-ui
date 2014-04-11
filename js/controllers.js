function RootController ($scope, $window) {
	$scope.show_dimmer = false;
	
	$scope.dimmer = function() {
		$scope.show_dimmer = true;
	}

	$scope.cancel = function(){
		$scope.show_dimmer = false;
	}

	$scope.github = function() {
		window.location = 'https://github.com/angularify/angular-semantic-ui';
	}
}