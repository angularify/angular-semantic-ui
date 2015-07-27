'use strict';

angular.module('angularify.semantic.checkbox', [])
.directive('checkbox', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      type: '@',
      size: '@',
      checked: '&?',
      disabled: '&?',
      ngModel: '=ngModel'
    },
    controller: function() {
      var vm = this;

      // TODO: assert this is usefull ?
      // if(angular.isUndefined(vm.ngModel)) { vm.ngModel = !!vm.ngModel; }

      if(angular.isFunction(vm.checked)) { vm.ngModel = !!vm.checked(); }

      vm.toggle = function() {
        if(angular.isFunction(vm.disabled) && vm.disabled()) return;
        vm.ngModel = !vm.ngModel;
      }
    },
    controllerAs: 'vm',
    bindToController: true,
    require: 'ngModel',
    template: '<div class="ui checkbox">' +
      '<input type="checkbox" ng-model="vm.ngModel" ng-disabled="vm.disabled()"/>' +
      '<label ng-click="vm.toggle()" ng-transclude></label>' +
      '</div>',
    link: function() { }
  };
});
