/**
 * License: MIT.
 * Copyright (C) 2016, Mikhael GERBET frollon.noir@gmail.com.
 */

'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'angular-livestamp.js',
				'tests.js',
				'karma.conf.js'
			]
		},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'angular-livestamp.min.js': 'angular-livestamp.js'
				}
			}
		}
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
