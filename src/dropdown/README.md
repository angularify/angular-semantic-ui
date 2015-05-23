angularify.semantic.dropdown
============================

`angularify.semantic.dropdown` - dropdown directive for angular.js.

Usage
-----

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
	<dropdown-group value="c.value" title="c.title" ng-repeat="c in catetories">{{c.title}}</dropdown-group>
</dropdown>
```

`dropdown` - can have following attributes:

-	`title` - title(placeholder) of the dropdown;
-	`ng-model` - angular model;
-	`open` - `true` || `false`. is current dropdown opened.
-	`disabled` - `true` || `disabled`. disables the dropdown.
-	`disable` - `true` || `disabled`. watches on the scope, so you can change it dynamically.

`dropdown-group` - can have following attributes:

-	`title` - optional setting to set the name and value (if value not specified) of the entry. Helpful for those {{variables}} that don't;
-	`value` - set item value.

Contribution
------------

1.	Fork main [repository](https://github.com/angularify/angular-semantic-ui).
2.	Make changes.
3.	Create issue.
4.	Send pull request.
5.	Thank you.

TODO
----

1.	Add different dropdown types.
