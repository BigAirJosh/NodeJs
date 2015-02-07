module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	clean: {
	    build: ['build'],
	    release: ['dist']
	},
	uglify: {
	    options: {
		banner: '#!/usr/bin/env node\n/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
		src: 'src/app.js',
		dest: 'build/app-<%= pkg.version %>.min.js'
	    }
	},
	jshint: {
	    src: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	    options: {
		globals: {
		    jQuery: true
		}
	    }
	},
	watch: {
	    files: ['<%= jshint.files %>'],
	    tasks: ['jshint']
	},
	execute: {
	    src_target: {
		src: ['src/app.js']
	    },
	    build_target: {
		src: ['build/app-<%= pkg.version %>.min.js']
	    }
	}
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-execute');

    // Default task(s).
    grunt.registerTask('default', ['clean:build', 'jshint', 'uglify']);
    grunt.registerTask('run', ['jshint', 'execute:src_target']);

};
