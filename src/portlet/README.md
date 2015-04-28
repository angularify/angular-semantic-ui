angularify.semantic.portlet
===============================

`angularify.semantic.portlet` - portlet/widget directive for angular.js.

Usage
--------------------
```html
<portlet title="Portlet Sample" fullscreen="true" settings="true" settings-on-click="Settings()" width="320px" height="460px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</portlet>
```


`portlet` - can have following attributes:

  * `fullscreen` - Make the portlet fullscreen, portlet styles must be included;
  * `settings` - 'true/false', enables or disables settings icon for the portlet.
  * `settings-on-click` - Can be linked with a function on the controller to launch own settings screen, for eg:-(sidebar, modal, etc.,)
  * `title` - Title of the portlet can be used.
  * `width` and `height` - Sets the portlet container size.
