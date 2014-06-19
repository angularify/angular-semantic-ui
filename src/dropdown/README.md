angularify.semantic.dropdown
===============================

`angularify.semantic.dropdown` - dropdown directive for angular.js.

Usage
-------------------------------

```html
<dropdown title="my dropdown" ng-model="dropdown_model" open="true">
    <dropdown-group>item1</dropdown-group>
    <dropdown-group>item2</dropdown-group>
    <dropdown-group>item3</dropdown-group>
    <dropdown-group>item4</dropdown-group>
</dropdown>
```

or

```html
<dropdown title="my dropdown" ng-model="category_model">
	<dropdown-group title="c" ng-repeat="c in catetories">{{c}}</dropdown-group>
</dropdown>
```

`dropdown` - can have following attributes:

  * `title` - title of the dropdown;
  * `ng-model` - angular model;
  * `open` - `true` || `false`. is current dropdown opened.

`dropdown-group` - can have following attributes:

  * `title` - optional setting to set the name and value of the entry. Helpful for those {{variables}} that don't.

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
-------------------------------

1. Add different dropdown types.
