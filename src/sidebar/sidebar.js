'use strict';

angular
  .module('angularify.semantic.sidebar', [])
  .directive('sidebar', sidebar)
  .directive('sidebarLink', sidebarLink)
  .directive('sidebarItem', sidebarItem)
  .directive('sidebarItemGroup', sidebarItemGroup);             
             
function sidebar() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="ui inverted left vertical sidebar menu" ' +
                    'ng-transclude></div>',
    scope: {
      buttonClass: '@'
    },
    link: function (scope, element, attrs) {
      element.sidebar('attach events', scope.buttonClass, 'show');
    }
  };
}

function sidebarItemGroup() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="item">' + 
                '<div class="ui small inverted header">{{ title }}</div>' +
                '<div class="menu" ng-transclude></div>' +
              '</div>',
    scope: {
      title: '@' 
    }
  };
}

function sidebarItem() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="item" ng-transclude></div>'
  };
}

function sidebarLink() {
  return {
    restrict: 'E',
    replace: true,
    template: '<a class="item" href="{{ href }}">' +
                '<i class="{{ icon }} icon"></i>' +
                '{{ title }}' +
              '</a>',
    scope: {
      title: '@',
      icon: '@',
      href: '@'
    }
  };
}