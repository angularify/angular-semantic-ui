'use strict';
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
            js: {
                src: ['src/angularify.semantic.js',
                    'src/accordion/accordion.js',
                    'src/checkbox/checkbox.js',
                    'src/dimmer/dimmer.js',
                    'src/dropdown/dropdown.js',
                    'src/modal/modal.js',
                    'src/popup/popup.js',
                    'src/sidebar/sidebar.js',
                    'src/rating/rating.js',
                    'src/wizard/wizard.js',
                ],
                dest: '<%= dist %>/<%= filename %>.js'
            }
        },
        uglify: {
            dist: {
                src: ['<%= dist %>/<%= filename %>.js'],
                dest: '<%= dist %>/<%= filename %>.min.js'
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
        },
        watch: {
            javascript: {
                files: ['src/**/*.js'],
                tasks: ['concat:js', 'uglify']
            }

        }
    });

    grunt.registerTask('build', ['concat:js', 'uglify']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['concat:js', 'uglify', 'watch:javascript']);
};
