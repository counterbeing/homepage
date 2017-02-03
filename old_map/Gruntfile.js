/*global module:false*/
var yfm = require('assemble-front-matter');
var _ = require('underscore');
var async = require('async');
var flickrGrabber = require('./src/js/lib/assembleFlickrGrabber.js');

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('assemble');
  // grunt.loadNpmTasks('grunt-sitemap-ping');
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

    assemble: {
      options: {
        assets: 'assets',
        layout: ['src/layouts/map.hbs'],
        helpers: ['src/helpers/*.js'],
        partials: ['src/partials/**/*.hbs'],
        data: ['src/data/*.{json,yml}']
      },
      posts: {
        assets: 'assets',
        layout: ['src/layouts/map.hbs'],
        src: ['src/posts/**/*.md'],
        dest: 'tmp/posts/'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      vendor: {
        src: ['src/js/vendor/*.js'],
        dest: 'deploy/js/vendor.min.js'
      },
      map: {
        src: ['tmp/js/page/map.js'],
        dest: 'deploy/js/page/map.min.js'
      }
    },

    sitemap: {
      dist: {
        siteRoot: 'deploy/',
        pattern: ''
      }
    },


    connect: {
      options: {
        port: 9001,
        livereload: 35829,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            'tmp/'
          ]
        }
      }
    },

    
    shell: {
      movePosts: {
        command: 'mv tmp/posts/src/posts/* tmp/posts/'
      }
    },

    cssmin: {
      map: {
        src: ['tmp/css/bootstrap.css', 'tmp/css/master.css'],
        dest: 'deploy/css/master.min.css'
      },
      reloaded: {
        src: ['tmp/css/bootstrap.css', 'tmp/css/reloaded.css'],
        dest: 'deploy/css/reloaded.min.css'
      },
    },

    processhtml: {
      deploy: {
        options: {
          process: true,
        },
        files: [
          {
          expand: true,
          cwd: 'deploy/',
          src: ['**/*.html'],
          dest: 'deploy/',
          ext: '.html',  
        },
        ],

      }
    },

    clean: {
      tmp: "tmp",
      deploy: "deploy",
      flickrCache: "src/posts/**/flickr.cache"
    },

    copy: {
      tmp: {
        files: [
          {expand: true, cwd: 'src', src: ['**/*.{js,html,jpg,png,css,ico,json,txt}', '!posts/**', '!partials/**'], dest: "tmp"},
        ]
      },
      deploy: {
        files: [
          {expand: true, cwd: 'tmp', src: ['**/*.{html,jpg,png,ico,json,txt}'], dest: "deploy"},
        ]
      }
    },

    htmlmin: {
      deploy: {
        options: {
          keepClosingSlash: true,
          removeComments: true,
          collapseWhitespace: true,
          removeEmptyAttributes: true,
          removeCommentsFromCDATA: true,
          removeCDATASectionsFromCDATA: true,
          collapseBooleanAttributes: true,
          removeRedundantAttributes: true
        },
        files: [
          {
          expand: true,         // Enable dynamic expansion.
          cwd: 'deploy/',       // Src matches are relative to this path.
          src: ['**/*.html'],   // Actual pattern(s) to match.
          dest: 'deploy/',      // Destination path prefix.
          ext: '.html',         // Dest filepaths will have this extension.
        }
        ],
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'tmp/**/*',
        ]
      },
      posts: {
        files: ["src/posts/**/*", "src/layouts/map*", "src/partials/*","src/js/**/*", 'src/helpers/*.js'],
        tasks: ['posts']
      },
      html: {
        files: ["src/**/*.html", "src/css/*.css"],
        tasks: ['copy']
      },
      latlon: {
        files: ["latlon.json"],
      }
    },

    rsync: {
      options: {
        args: ["--verbose"],
        exclude: [".git*","*.scss","node_modules"],
        recursive: true
      },
      dist: {
        options: {
          src: "deploy/",
          dest: "/home/89113/users/.home/domains/corylogan.com/html",
          host: "counterbeing.com@s89113.gridserver.com"
        }
      }
    },
    collectPlaces: {
      all: {
        expand: true,     // Enable dynamic expansion.
        cwd: 'src/posts',      // Src matches are relative to this path.
        src: ['**/*.md'] // Actual pattern(s) to match.
      }
    }

  });

  grunt.registerTask('posts', ['tmp', 'assemble']);
  grunt.registerTask('ideas', ['assemble:ideas']);
  grunt.registerTask('preflight', ['clean:deploy', 'tmp','posts', 'copy:deploy', 'cssmin',  'uglify', 'processhtml','htmlmin', 'sitemap']);
  grunt.registerTask('tmp', ['clean:tmp', 'collectPlaces', 'copy:tmp']);
  grunt.registerTask('default', ['posts', 'connect:livereload', 'watch']);
  grunt.registerTask('deploy', ['preflight', 'rsync']);
  grunt.registerTask('flickrRefresh', ['clean:flickrCache', 'flickr']);

  grunt.task.registerMultiTask('collectPlaces', 'Goes through specified files to find YFM data containing a location. Then it sorts and places all of them in a JSON file.', function() {
    var collection = [];
    this.files.forEach(function (f) {
      var src = f.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var raw = yfm.extract(filepath);
        return raw.context;
      });
      src = src[0];
      src = _.pick(src, 'latitude', 'longitude');
      src['path'] = '/posts/src/posts/' + f['dest'].replace('post.md','post.html');
      src['uid'] = f['dest'].replace(/\/post.md/, '');
      grunt.log.writeln(JSON.stringify(src));
      collection.push(src);
    });
    grunt.file.write('tmp/data/places.json', JSON.stringify(collection));
  });


  grunt.task.registerTask('flickr', 'Goes through all the posts, finds the flickr data if it exists, then creates a cache of html for use with assemble.', function(){
    var done = this.async();
    grunt.log.writeln('Collecting posts with flickr data...');
    var posts = grunt.file.expand('src/posts/**/post.md');  
    async.each(posts, function(post){
      var yaml = yfm.extract(post);
      // If there's a flickr_link defined in the YFM
      if(yaml.context.flickr_link){
        var flickrCache = post.replace(/post\.md/, 'flickr.cache');
        // Then we want to check to see if the cache already exists
        if (!grunt.file.exists(flickrCache)){
          // If it doesn't then we collect our data
          var flickrOptions = {photosetID: yaml['context']['flickr_link'], apiKey: "0ec67e83e54071dabf7cdb96cb09fabc"};
          flickrGrabber.getPhotos(flickrOptions, flickrCache);
        }
      }

    });      

  });

};
