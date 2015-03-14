
angular
  .module('dropdownApp', ['angularify.semantic.dropdown'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
    $scope.dropdown_model = 'item3';

    $scope.dropdown_repeat_model = 'item1';
    $scope.dropdown_items = [
      'item1',
      'item2',
      'item3',
      'item4'
    ];
}

