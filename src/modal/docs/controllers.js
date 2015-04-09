angular
  .module('modalApp', ['angularify.semantic.modal'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl($scope) {
    $scope.show_modal = false;

    $scope.open_modal = function () {
      $scope.show_modal = true; 
    };
  
    $scope.close_modal = function (){
      $scope.show_modal = false;
    };
}