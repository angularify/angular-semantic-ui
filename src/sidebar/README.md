angularify.semantic.sidebar
===============================

`angularify.semantic.sidebar` - sidebar directive for angular.js.

Usage
-------------------------------

```html
<button class="ui btn right floated" ng-click="side_bar()">Show sidebar</button>
<sidebar ng-model="show_sidebar">
  <sidebar-item title="Home"></sidebar-item>
  <sidebar-item title="Home2"></sidebar-item>
  <sidebar-item title="Home3"></sidebar-item>
</sidebar>
```

```javascript
var sidebarApp = angular.module('sidebarApp', ['angularify.semantic.sidebar']);

function RootCtrl ($scope) {
    $scope.show_sidebar = false;

    $scope.side_bar = function(){
        $scope.show_sidebar = !$scope.show_sidebar;
    }
}
```
`<sidebar>` - can have following properties:

  * `ng-model` - show current sidebar, `true` or `false`;

`<sidebar-item>` - can have following properties:

  * `title` - menu title;
  * `href`  - link address;
  * `icon`  - menu icon.

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
------------------------------

1. Add more tests.
2. Add different sidebar types.
