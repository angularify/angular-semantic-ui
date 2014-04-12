var modalApp = angular.module('modalApp', ['angularify.semantic.modal']);

function RootCtrl ($scope) {
    $scope.show_modal = true;

    $scope.close_modal = function(){
        $scope.show_modal = false;
    }
}