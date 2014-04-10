var app = angular.module('App', ['angularify.semantic']);

$('.demo.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;
$('.toggle.button')
  .removeClass('disabled')
;