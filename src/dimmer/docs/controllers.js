var dimmerApp = angular.module('dimmerApp', ['angularify.semantic.dimmer']);
dimmerApp.controller('RootCtrl', RootCtrl);

function RootCtrl($scope) {
    $scope.dimmer = function(){
        $scope.show_dimmer = true;
    };
}