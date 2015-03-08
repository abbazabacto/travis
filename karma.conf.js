module.exports = function(config){
	config.set({
		basePath: './',
		frameworks: ['jasmine'],
		files: [
			'index.js', 'index.tests.js'
		],
		plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
		exclude: [],
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		captureTimeout: 60000,
		singleRun: false
	});
};