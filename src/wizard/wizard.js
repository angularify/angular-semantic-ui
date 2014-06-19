/* globals _:false */
'use strict';
angular.module('angularify.semantic.wizard', [])



.controller('WizardController', ['$scope',
    function($scope) {
        $scope.steps = [];
        $scope.currentStep = null;
        $scope.stepsLength = "";
        $scope.$watch('currentStep', function(step) {
            if (!step) return;
            var stepTitle = $scope.selectedStep.title || $scope.selectedStep.wzTitle;
            if ($scope.selectedStep && stepTitle !== $scope.currentStep) {
                $scope.goTo(_.findWhere($scope.steps, {
                    title: $scope.currentStep
                }));
            }
        });

        $scope.$watch('[editMode, steps.length]', function() {
            var editMode = $scope.editMode;
            if (_.isUndefined(editMode) || _.isNull(editMode)) return;

            if (editMode) {
                _.each($scope.steps, function(step) {
                    step.completed = true;
                });
            }
        }, true);




        this.addStep = function(step) {
            $scope.steps.push(step);
            if ($scope.steps.length === 1) {
                $scope.goTo($scope.steps[0]);
            }
        };

        $scope.goTo = function(step) {
            unselectAll();
            $scope.selectedStep = step;
            if (!_.isUndefined($scope.currentStep)) {
                $scope.currentStep = step.title || step.wzTitle;
            }
            step.selected = true;
            $scope.$emit('wizard:stepChanged', {
                step: step,
                index: _.indexOf($scope.steps, step)
            });
        };

        function unselectAll() {
            _.each($scope.steps, function(step) {
                step.selected = false;
            });
            $scope.selectedStep = null;
        }

        this.next = function(draft) {
            var index = _.indexOf($scope.steps, $scope.selectedStep);
            if (!draft) {
                $scope.selectedStep.completed = true;
            }
            if (index === $scope.steps.length - 1) {
                this.finish();
            } else {
                $scope.goTo($scope.steps[index + 1]);
            }
        };

        this.goTo = function(step) {
            var stepTo;
            if (_.isNumber(step)) {
                stepTo = $scope.steps[step];
            } else {
                stepTo = _.findWhere($scope.steps, {
                    title: step
                });
            }
            $scope.goTo(stepTo);
        };

        this.finish = function() {
            if ($scope.onFinish) {
                $scope.onFinish();
            }
        };

        this.cancel = this.previous = function() {
            var index = _.indexOf($scope.steps, $scope.selectedStep);
            if (index === 0) {
                throw new Error('Cant go back. Its already in step 0');
            } else {
                $scope.goTo($scope.steps[index - 1]);
            }
        };
    }
])
    .directive('wizard', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                fullwidth: "@",
                currentStep: '=',
                onFinish: '&',
                hideIndicators: '=',
                editMode: '=',
                name: '@'
            },
            controller: 'WizardController',
            template: '<div><div class="ui steps {{stepsLength}} small"><div class="ui step" ng-repeat="step in steps" ng-click="!step.completed || goTo(step)" ng-class="{disabled: !step.completed && !step.selected, active: step.selected && !step.completed, done: step.completed && !step.selected, editing: step.selected && step.completed}">{{step.title}}</div></div><div ng-transclude></div></div>',
            link: function(scope, element, attrs, WizardController) {
                if (scope.fullwidth === 'true') {
                    var widthmatrix = {
                        0: '',
                        1: 'one',
                        2: 'two',
                        3: 'three',
                        4: 'four',
                        5: 'five',
                        6: 'six',
                        7: 'seven',
                        8: 'eight',
                        9: 'nine',
                        10: 'ten'
                    };
                    scope.stepsLength = widthmatrix[scope.steps.length];
                }

            }
        };
    })
    .directive('wizardPane', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            require: '^wizard',
            controller: 'WizardController',
            scope: {
                title: '@'
            },
            template: '<div class="ui segment" ng-transclude ng-show="selected"></div>',
            link: function(scope, element, attrs, WizardController) {

                WizardController.addStep(scope);
            }
        };
    });


function wizardButtonDirective(action) {
    angular.module('angularify.semantic.wizard')
        .directive(action, function() {
            return {
                restrict: 'A',
                replace: false,
                require: '^wizard',
                link: function($scope, $element, $attrs, wizard) {

                    $element.on('click', function(e) {
                        e.preventDefault();
                        $scope.$apply(function() {
                            $scope.$eval($attrs[action]);
                            wizard[action.replace("wz", "").toLowerCase()]();
                        });
                    });
                }
            };
        });
}

wizardButtonDirective('wzNext');
wizardButtonDirective('wzPrevious');
wizardButtonDirective('wzFinish');
wizardButtonDirective('wzCancel');
