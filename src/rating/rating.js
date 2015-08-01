'use strict';

angular.module('angularify.semantic.rating', [])
.directive('rating', function(){
  return {
    restrict: "E",
    replace: true,
    scope: {
      ngModel : '=',
      max: '=',
      onRate: '&?',
      interactive: '=',
      clearable: '='
    },
    controller: function() {
      var vm = this;

      if(!vm.max) vm.max = 5;
      if(!+vm.ngModel) vm.ngModel = 0;
      if(+vm.ngModel > vm.max ) vm.ngModel = +vm.max;
      if(vm.interactive == undefined) vm.interactive = true;
      if(vm.max == 1 && vm.clearable == undefined) vm.clearable = true;

      vm.setRate = function(rate) {
        if (vm.clearable && rate == +vm.ngModel) {
          vm.ngModel = 0;
        } else {
          vm.ngModel = rate;
          if (angular.isFunction(vm.onRate)) vm.onRate({ rate: rate });
        }
      };
    },
    controllerAs: 'vm',
    bindToController: true,
    require: 'ngModel',
    template: '<div class="ui rating" ng-switch="vm.interactive">' +
                '<i ng-switch-when="true" ' +
                  'class="icon" ' +
                  'ng-class="{ active: vm.current >= rate }" ' +
                  'ng-click="vm.setRate(rate)" ' +
                  'ng-mouseenter="vm.current = rate" ' +
                  'ng-mouseleave="vm.current = +vm.ngModel" ' +
                  'ng-repeat="rate in vm.range track by $index"' +
                '></i>' +
                '<i ng-switch-when="false" ' +
                  'class="icon" ' +
                  'ng-class="{ active: vm.current >= rate }" ' +
                  'ng-repeat="rate in vm.range track by $index"' +
                '></i>' +
              '</div>',
    link: function($scope, iElement, iAttrs) {
      $scope.$watch('vm.max', function (value) {
        $scope.vm.range = Array.apply(null, Array(+value)).map(function (_, i) {return i+1;});
      });

      $scope.$watch('vm.ngModel', function(value) {
        $scope.vm.current = value;
      });
    }
  };
});
