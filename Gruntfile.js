'use strict';

module.exports = function(grunt){
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
		    options: {
		      curly: true,
		      eqeqeq: true,
		      eqnull: true,
		      browser: true,
		      globals: {
		        jQuery: true
		      },
		    },
		    uses_defaults: ['index.js', 'dir1/**/*.js', 'dir2/**/*.js'],
		    with_overrides: {
		      options: {
		        curly: false,
		        undef: true,
		      },
		      files: {
		        src: ['index.js', 'dir3/**/*.js', 'dir4/**/*.js']
		      },
		    }
	    }
	});

	grunt.registerTask('travis', 'jshint');
};