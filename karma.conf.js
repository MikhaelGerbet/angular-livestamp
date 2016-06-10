/*
 * License: MIT.
 * Copyright (C) 2016, Mikhael GERBET frollon.noir@gmail.com.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		autoWatch: true,
		reporters: ['dots', 'coverage'],
		files: [
			'bower_components/jquery/dist/jquery.js',
            'bower_components/moment/moment.js',
            'bower_components/livestampjs/livestamp.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'angular-livestamp.js',
			'tests.js'
		],
		preprocessors: {
			'angular-livestamp.js': 'coverage'
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		}
	});
};
