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
  <br/>
  <checkbox ng-model="dd" disabled="disabled">isActive</checkbox>
</div>
```

`checkbox` - can have following properties:

  * `class / ng-class`:   - `standard` || `slider` || `toggle` || `large` || `huge` || `undefined` - the style of checkbox;
  * `checked` - `true` || `false`, checked checkbox or not;
  -	`disabled` - `disabled`, optional if the checkbox is disabled or not;
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
