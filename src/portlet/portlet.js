'use strict'

angular.module('angularify.semantic.portlet', [])

.directive('portlet', [function () {
	return {
		restrict: 'AE',
		transclude: true,
		scope: {
			fullscreen: '=fullscreen',
			title: '@title',
			settings: '=settings',
			width: '@width',
			height: '@height',
			settingsOnClick: '&settingsOnClick'
		},
		template: '<div class="portlet"><div ' + 
		'ng-style="{\'width\': width , \'height\': height }"' +
		'class="ui card"><div class="content">' + 
		'<i class="right floated close icon"></i>' +
		'<i ng-if="fullscreen" class="right floated expand icon fullscreen"></i>' +
		'<i ng-if="settings" ng-click="settingsOnClick()" class="right floated options icon"></i>' +
		'<div class="header">{{title}}</div>' +
		'<div class="ui clearing divider"></div>' +
		'<div class="description" ng-transclude>' +
		'</div></div></div></div>',
		link: function(scope, elem, attrs) {
			scope.$watch('fullscreen', function() {
				elem.find('.portlet .fullscreen').bind('click', function(event){
					var _target = angular.element(event.target).closest('.card');
					if(angular.element(event.target).hasClass('expand')) {
						angular.element(_target).addClass('on');
						angular.element(event.target).removeClass('expand').addClass('compress');
					} else {
						angular.element(event.target).removeClass('compress').addClass('expand');
						angular.element(_target).removeClass('on');
					}
				});
			});
			elem.find('.portlet .close').bind('click', function(event){
				var portlet = angular.element(event.target).closest('.portlet').parent();
				portlet.remove();
				portlet = null;
				scope.$destroy();
				scope = null;
			});
		}
	};
}]);














