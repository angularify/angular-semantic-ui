angularify.semantic.sidebar
===============================

`angularify.semantic.sidebar` - sidebar directive for angular.js.

Usage
-------------------------------

```html
  <sidebar button-class="#openSidebar">
    <sidebar-item>
      <h2 class="ui header inverted">
        <div class="content">
          Sidebar
          <div class="sub header">Links and items</div>
        </div>
      </h2>
    </sidebar-item>
    <sidebar-link icon="home" title="home" href="#"></sidebar-link>
    
    <sidebar-item-group title="other">
      <sidebar-link title="contact" href="#"></sidebar-link>
      <sidebar-link title="download" href="#"></sidebar-link>
    </sidebar-item-group>
  </sidebar>
  
  
  <div class="pusher">
    <button id="openSidebar" class="ui btn">Show sidebar</button>
  </div>
```

```javascript
angular
  .module('sidebarApp', ['angularify.semantic.sidebar'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
  $scope.isOpen = false;
}
```
`<sidebar>` - can have following properties:

  * `button-class` - attach a selector that open the sidebar

`<sidebar-group-item>` - can have following properties:

  * `title` - group title
  
`<sidebar-link>` - can have following properties:
  
  * `title` - link text
  * `icon`  - icon name
  * `href`  - link address


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
2. Add different sidebar types.
