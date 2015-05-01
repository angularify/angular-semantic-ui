'use strict'

function BuildImageSource(options) {
	var image = {title:'', text:''};
	if(options.titleIcon != undefined && options.titleIcon != '') {
		image.title = '<i class="' + options.titleIcon + ' icon"></i> ';
	} else if(options.titleImg != undefined && options.titleImg != '')  {
		image.title = '<img src="' + options.titleImg +'">';
	}
	if(options.textIcon != undefined && options.textIcon != '') {
		image.text = '<i class="' + options.textIcon + ' icon"></i> ';
	} else if(options.textImg != undefined && options.textImg != '') {
		image.text = '<img src="' + options.textImg +'">';
	}
	return image;
}

function BuildTemplate(options) {
	options.color = (options.color == undefined) ? '' : options.color;
	options.position = (options.horizontal) ? 'horizontal' : '';
	options.inverted = (options.invert) ? 'inverted' : '';
	options.floated = (options.float != '' && options.float != undefined) ? 
					options.float + ' floated' : '';
	options.size = (options.size != '' && options.size != undefined) ? 
					options.size : '';
	options.image = BuildImageSource(options);
	var _template = '<div class="ui {{floated}} {{inverted}} ' 
	+ '{{position}} {{color}} {{size}} statistic">';
	if(options.titleTop) {
		_template += '<div class="label">' + options.image.title +
		'{{title}}</div><div class="value">' + options.image.text +
		'{{text}}</div>';
	} else {
		if(options.bigText) {
			_template += '<div class="text value">' + options.image.text +
			'{{text}}</div><div class="label">' + options.image.title +
			'{{title}}</div>';
		}else {
			_template += '<div class="value">' + options.image.text +
			'{{text}}</div><div class="label">' + options.image.title +
			'{{title}}</div>';
		}
	}
	_template += '</div>';
	return _template;
}

angular.module('angularify.semantic.statistic', [])

.directive('statistic', ['$compile',function ($compile) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			title: '@title',
			text: '@text',
			titleTop: '=titleTop',
			bigText: '=bigText',
			color: '@color',
			horizontal: '=horizontal',
			invert: '=invert',
			float: '@float',
			size: '@size',
			titleIcon: '@titleIcon',
			titleImg: '@titleImg',
			textIcon: '@textIcon',
			textImg: '@textImg'
		},
		link: function(scope, elem, attrs) {
			elem.html(BuildTemplate(scope));
			$compile(elem.contents())(scope);
		}
	};
}])

.directive('statistics', [function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			horizontal: '@horizontal'
		},
		link: function(scope, elem, attrs) {
			scope.position = (scope.horizontal == 'true') ? 'horizontal' : '';
		},
		template: '<div class="ui {{position}} statistics" ng-transclude></div>'
	};
}]);