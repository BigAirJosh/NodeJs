module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
	    options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
		src: 'src/app.js',
		dest: 'build/app-<%= pkg.version %>.min.js'
	    }
	},
	jshint: {
	    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	    options: {
		globals: {
		    jQuery: true
		}
	    }
	},
	watch: {
	    files: ['<%= jshint.files %>'],
	    tasks: ['jshint']
	}
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);

};
