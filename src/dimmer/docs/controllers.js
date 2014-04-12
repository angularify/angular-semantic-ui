var dimmerApp = angular.module('dimmerApp', ['angularify.semantic.dimmer']);

function RootCtrl ($scope) {
    $scope.dimmer = function(){
        $scope.show_dimmer = true;
    }
}

