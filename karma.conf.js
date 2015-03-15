basePath = '.';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/**/*.js',
];

exclude = [
  'src/**/docs/*', 'src/**/README.md'
];

browsers = [
  'PhantomJS'
];

reporters = ['progress'];

port = 9018;
runnerPort = 9100;

colors = true;

logLevel = LOG_INFO

autoWatch = false;

singleRun = false;