
angular
  .module('dropdownApp', ['angularify.semantic.wizard'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
    $scope.currentStep = '';
  
  $scope.callme = function () {
    console.log('finished');
  }
}

