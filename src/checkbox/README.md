angularify.semantic.checkbox
===============================

`angularify.semantic.checkbox` - checkbox directive for angular.js.

Usage
-------------------------------

```html
<div id="content">
  <checkbox checked="false" ng-model="aa">Alex</checkbox>
  <br/>
  <checkbox checked="true" ng-model="bb">0xAX</checkbox>
  <br/>
  <checkbox ng-model="cc">User</checkbox>
</div>
```

`checkbox` - can have following properties:

  * `type`:   - `standard` || `slider` || `toggle` || `undefined` - the type of checkbox;
  * `size`:   - `large` || `huge` || `undefined` - the size of the current checkbox;
  * `checked` - `true` || `false`, checked checkbox or not;
  * `ng-model`   - angular model.

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
-------------------------------

1. Add radio-button.