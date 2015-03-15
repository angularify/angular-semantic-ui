angularify.semantic.wizard
===============================

`angularify.semantic.wizard` - wizard/steps directive for angular.js.

CREDIT
--------------------

This Wizard is a port of the angular-wizard by mgonto from [github](https://github.com/mgonto/angular-wizard)

Usage
--------------------
```html
<wizard fullwidth="true" on-finish="finished()" current-step="currentStep">
  <wizard-pane title="Step1">
    <h1>Step 1</h1>
    <form name="step1form">
        <div class="ui input">
          <input type="text">
        </div>
      <button type="submit" class="ui button" wd-next>Next</button>
    </form>
  </wizard-pane>
  <wizard-pane title="Step2">
    <h1>Step 2</h1>
    <form name="step2form">
        <div class="ui input">
          <input type="text">
        </div>
      <button type="submit" class="ui button" wd-finish>Finish</button>
      <button type="submit" class="ui button" wd-previous>Previous</button>
    </form>
  </wizard-pane>
</wizard>
```


`wizard` - can have following attributes:

  * `fullwidth` - Go fullwidth for the steps bar;
  * `current-step` - Updated each time a new step is selected
  * `on-finish` - Function to call when a button with `wd-finish` will be clicked


`wizard-pane` - can have the following attributes

  * `title` - Title of the Step in the wizard

`Buttons` - There are 4 types of buttons that go in forms to move a wizards direction

  * `wz-next` - next page
  * `wz-previous` - previous page
  * `wz-finish` - finish Wizard
  * `wz-cancel` - cancel wizard