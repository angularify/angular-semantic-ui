
angular
  .module('portletApp', ['angularify.semantic.portlet'])
  .controller('MainCtrl', MainCtrl);

function MainCtrl ($scope) {
  $scope.Settings = function () {
    console.log('settings loaded successfully!');
  }
}

