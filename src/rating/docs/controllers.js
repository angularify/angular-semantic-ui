angular.module('ratingApp', ['angularify.semantic.rating'])
.controller('RootCtrl', function($scope) {
  $scope.rate = 3;
  $scope.rated = function(rate) {
    alert('Rate is ' + rate);
  };

  $scope.clearable_rate = 2;

  $scope.fixed_rate = 4;
});

