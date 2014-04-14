var sidebarApp = angular.module('sidebarApp', ['angularify.semantic.sidebar']);

function RootCtrl ($scope) {
    $scope.show_sidebar = false;

    $scope.side_bar = function(){
        $scope.show_sidebar = !$scope.show_sidebar;
    }
}