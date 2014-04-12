angularify.semantic.modal
===============================

`angularify.semantic.modal` - modal window directive for angular.js.

Usage
-------------------------------

```html
 <modal ng-model="show_modal">
    <i class="close icon" ng-click="close_modal()"></i>
    <div class="header">
      Change Your Homepage
    </div>
    <div class="content">
      <div class="left">
        <i class="home icon"></i>
      </div>
      <div class="right">
        <p>Are you sure you want to change your homepage to <b>Poodle.com</b>?</p>
      </div>
    </div>
    <div class="actions">
      <div class="two fluid ui buttons">
        <div class="ui negative labeled icon button">
          <i class="remove icon"></i>
            No
        </div>
        <div class="ui positive right labeled icon button">
          Yes
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
</modal>
```

and js:

```javascript
function RootCtrl ($scope) {
    $scope.show_modal = true;

    $scope.close_modal = function(){
        $scope.show_modal = false;
    }
}
```

Contribution
-------------------------------

 1. Fork main [repository](https://github.com/angularify/angular-semantic-ui).
 2. Make changes.
 3. Create issue.
 4. Send pull request.
 5. Thank you.

TODO
-------------------------------

1. Add different modal types.