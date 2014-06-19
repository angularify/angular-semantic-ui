angularify.semantic.wizard
===============================

`angularify.semantic.wizard` - wizard/steps directive for angular.js.

CREDIT
--------------------

This Wizard is a port of the angular-wizard by mgonto from [github](https://github.com/mgonto/angular-wizard)

Usage
--------------------
```html
<wizard fullwidth="true">
	<wizard-pane title="Step1">
		<h1>Step 1</h1>
		<form name="step1form">
			<input type="text">
			<input type="submit" wz-next>
		</form>
	</wizard-pane>
	<wizard-pane title="Step2">
		<h1>Step 2</h1>
		<form name="step2form">
			<input type="text">
			<input type="submit" wz-finish>
	</wizard-pane>
</wizard>
```


`wizard` - can have following attributes:

  * `fullwidth` - Go fullwidth for the steps bar;


`wizard-pane` - can have the following attributes

  * `title` - Title of the Step in the wizard

`Buttons` - There are 4 types of buttons that go in forms to move a wizards direction

  * `wz-next` - next page
  * `wz-previous` - previous page
  * `wz-finish` - finish Wizard
  * `wz-cancel` - cancel wizard