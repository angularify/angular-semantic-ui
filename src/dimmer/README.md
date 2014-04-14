angularify.semantic.dimmer
===============================

`angularify.semantic.dimmer` - dimmer directive for angular.js.

Usage
-------------------------------

```html
<div id="content">
  <page-dimmer ng-model="show_dimmer" show="true">Hello</page-dimmer>
</div>

<div class="ui button" ng-click="dimmer()">
  Open dimmer
</div>
```

```javascript
var dimmerApp = angular.module('dimmerApp', ['angularify.semantic.dimmer']);

function RootCtrl ($scope) {
    $scope.dimmer = function(){
        $scope.show_dimmer = true;
    }
}
```

`dimmer` - can have following attributes:

  * `ng-model` - angular model;
  * `show`     - is current dimmer showed.

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
-------------------------------

1. add duration;
2. add animation;
3. add different dimmer types.