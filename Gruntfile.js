/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    wiki_path : '_includes/yeoman.wiki/',
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    },
    copy : {
        build : {
            files : [{expand: true, src: ['**'], cwd : '<%= wiki_path%>/articles/' ,filter: 'isFile', dest : '_posts/docs/'}]
        }
    },
    clean : ["_posts/docs/"],
    connect : {
        server :{
            options : {
                port: 9001,
                base: '_site',
                keepalive: true
            }
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // update wiki folder
  grunt.registerTask('update_wiki', 'update the wiki folder', function(){
    var done = this.async(),
        exec = require('child_process').exec,
        pull = 'git pull origin master',
        child;

    child = exec(pull, {cwd : grunt.config.get('wiki_path')}, function(error, stdout, stderr){
        if (error == null){
            grunt.log.ok(stdout);
            done(true);
        } else {
            grunt.log.warn(error);
            done(false);
        }
    });
  });

  // build the site
  grunt.registerTask('jekyllbuild', 'build the site', function(){
    var done = this.async(),
        exec = require('child_process').exec;
    // set encoding in case the encoding error
    grunt.util.spawn({cmd: "set_encoding.bat"}, function(error, stdout, stderr){
        if(error !== null){
            done(false);
        } else {
            grunt.log.ok(stdout);
        }
    }),
    exec('jekyll build', function(error, stdout, stderr){
        if(error !== null){
            done(false);
        } else {
            grunt.log.ok(stdout);
            done(true);
        }
    });
  });
  // whole build cycle
  grunt.registerTask('build', ['update_wiki', 'clean', 'copy', 'jekyllbuild']);

  grunt.registerTask('server', ['connect']);
};
