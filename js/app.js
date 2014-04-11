var app = angular.module('App', ['angularify.semantic.accordion', 
	                             'angularify.semantic.checkbox',
	                             'angularify.semantic.dimmer']);

$('.demo.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;
$('.toggle.button')
  .removeClass('disabled')
;