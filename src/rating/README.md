angularify.semantic.rating
===============================

`angularify.semantic.rating` - rating directive for angular.js.

Usage
-------------------------------

```html
 <rating id="my-rating" size="large" type="heart" ng-model="rating"></rating>
```

```javascript
var ratingApp = angular.module('ratingApp', ['angularify.semantic.rating']);

function RootCtrl ($scope) {
    $scope.rating = 2;
}
```

**IMPORTANT** Every `<rating>` must have unique `id` attribute.

Rating can have following properties:

  * `size` - can be: `small`, `large`, `huge` or `undefined`
  
  * `type` - can be any icon class (see [semantic-ui](http://semantic-ui.com/elements/icon.html) docs)
  
  * `ng-model` - return `Int` number: 0..5 (current rating)


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