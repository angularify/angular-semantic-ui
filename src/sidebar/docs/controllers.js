angular
  .module('sidebarApp', ['angularify.semantic.sidebar'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
  $scope.isOpen = false;
}