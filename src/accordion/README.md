angularify.semantic.accordion
===============================

`angularify.semantic.accordion` - accordion directive for angular.js.

Usage
-------------------------------

```html
<accordion close="true">
  <accordion-group  title="First tab" open=true>
    <p>Some text in first tab</p>
  </accordion-group> 
  <accordion-group title="Second tab">
    <p>Some text in second tab</p>
  </accordion-group> 
</accordion>
```

`<accordion>` - can have following attributes:

  * `close` - true || false, close all tabs if it is `true`.

`<accordion-group>` - can have following attributes:

  * `title` - tab's title;
  * `open`  - `true` || `false`, current `accordion-group` will be open.

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
-------------------------------

 1. Add transition.
 2. Add basic accordion.
 3. Add fluid-accordion.
 3. More tests.