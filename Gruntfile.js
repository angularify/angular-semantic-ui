module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-ngdocs');

  grunt.initConfig({
    dist: 'dist',
    filename: 'angular-semantic-ui',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js:{
        src: ['src/angularify.semantic.js', 'src/accordion/accordion.js',
              'src/checkbox/checkbox.js',   'src/dimmer/dimmer.js',
              'src/dropdown/dropdown.js',   'src/modal/modal.js',
              'src/popup/popup.js',         
              'src/sidebar/sidebar.js', 'src/raiting/raiting.js'
             ],
        dest: '<%= dist %>/<%= filename %>-<%= pkg.version %>.js'
      }
    },
    uglify: {
      dist:{
        src:['<%= dist %>/<%= filename %>-<%= pkg.version %>.js'],
            dest: '<%= dist %>/<%= filename %>-<%= pkg.version %>.js'
      }
    },
    karma: {
      options: {
          configFile: 'karma.conf.js'
        },
        watch: {
          background: true
        },
        continuous: {
          singleRun: true
        },
    }
  });

  grunt.registerTask('build', ['concat:js', 'uglify']);
  grunt.registerTask('test',  ['karma']);

  grunt.registerTask('angular-semantic-ui-version', 'Prints version of angular-semantic-ui.', function() {
    console.log('angular-semantic-ui-0.0.1');
  });
}