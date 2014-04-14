angularify.semantic.raiting
===============================

`angularify.semantic.raiting` - raiting directive for angular.js.

Usage
-------------------------------

```html
 <raiting id="my-raiting" size="large" type="heart" ng-model="raiting"></raiting>
```

```javascript
var raitingApp = angular.module('raitingApp', ['angularify.semantic.raiting']);

function RootCtrl ($scope) {
    $scope.raiting = 2;
}
```

**IMPORTANT** Every `<raiting>` must have unique `id` attribute.

Raiting can have following properties:

  * `size` - can be: `small`, `large`, `huge` or `undefined`
  
  * `type` - can be any icon class (see [semantic-ui](http://semantic-ui.com/elements/icon.html) docs)
  
  * `ng-model` - return `Int` number: 0..5 (current raiting)


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