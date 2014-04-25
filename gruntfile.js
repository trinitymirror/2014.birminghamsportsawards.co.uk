module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  //  Config
    pkg: grunt.file.readJSON('package.json')

   ,config: {
      dev: {
        options: {
          variables: {
            'dest': '_site'
          }
        }
      },
      stage: {
        options: {
          variables: {
            'dest': 'beta'
          }
        }
      },
      deploy: {
        options: {
          variables: {
            'dest': '2014'
          }
        }
      }
    }

  //  Build Site

   ,watch: {
      files: ['src/**/*']
     ,tasks: ['dev']
     ,options: {
        livereload: true
      }
    }

   ,express: {
      dev: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: '<%= grunt.config.get("dest") %>'
        }
      }
    }

   ,shell: {
      jekyll_dev: {
        command: 'jekyll build'
      },
      jekyll_stage: {
        command: 'jekyll build --destination <%= grunt.config.get("dest") %> --config _config.stage.yml'
      },
      jekyll_deploy: {
        command: 'jekyll build --destination <%= grunt.config.get("dest") %> --config _config.production.yml'
      }
    }

   ,copy: {
      bower: {
        files: [
          { expand: true, flatten: true, cwd: 'bower_components', src: ['jquery/dist/jquery.min.js'], dest: '<%= grunt.config.get("dest") %>/static/js/lib'},
          { expand: true, flatten: true, cwd: 'bower_components', src: ['html5shiv/dist/html5shiv.js'], dest: '<%= grunt.config.get("dest") %>/static/js/lib'},
          { expand: true, flatten: true, cwd: 'bower_components', src: ['jquery.validation/dist/jquery.validate.min.js'], dest: '<%= grunt.config.get("dest") %>/static/js/lib'}
        ]
      }
    }

   ,clean: {
      files: ['<%= grunt.config.get("dest") %>']
    }

  // Compile

   ,less: {
      development: {
        options: {
        paths: ['src/static/css']
        }
       ,files: {
        'src/static/css/global.css': ['src/_includes/less/global.less']
        }
      }
    }

  // Validate

   ,htmlhint: {
      options: {
        'tag-pair': true,
        'tagname-lowercase': true,
        'attr-lowercase': true,
        'attr-value-double-quotes': true,
        'doctype-first': true,
        'spec-char-escape': true,
        'id-unique': true,
        'head-script-disabled': true,
        'style-disabled': true,
        'src-not-empty': true,
        'img-alt-require': true
      },
      src: ['<%= grunt.config.get("dest") %>/**/*.html']

    }

   ,csslint: {
      options: {
        'adjoining-classes': false,
        'box-model': false,
        'box-sizing': false,
        'regex-selectors': false,
        'universal-selector': false,
        'font-sizes': false  //  Until CSSLint has the option to set an ammount
      },
      src: ['<%= grunt.config.get("dest") %>/static/css/*.css']
    }

   ,jshint: {
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        indent: 2,
        laxbreak: true,
        laxcomma: true,
        quotmark: 'single',
        trailing: true,
        undef: true,
        globals: {
          console: true,
          module: true,
          jQuery: true
        }
      },
      src: ['gruntfile.js', '<%= grunt.config.get("dest") %>/static/js/*.js']
    }

  // Optimise

  ,imagemin: {
      options: {
        optimizationLevel: 3
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/static/gui',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= grunt.config.get("dest") %>/static/gui'
        },
        {
          expand: true,
          cwd: 'src/media',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= grunt.config.get("dest") %>/static/media'
        }]
      }
    }

  // Deploy

  ,'gh-pages': {
    options: {
      base: '<%= grunt.config.get("dest") %>',
      branch: 'gh-pages',
      add: true,
      push: true
    },
    src: ['**/*', '!gruntfile.js', '!package.json', '!readme.md', '!_config.yml' ]
  }

  });

  // Tasks

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-config');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-notify');

  // Options

  grunt.registerTask('default', ['dev', 'serve']);
  grunt.registerTask('test', ['htmlhint', 'csslint', 'jshint']);
  grunt.registerTask('optim', ['imagemin']);
  grunt.registerTask('dev', ['config:dev', 'clean', 'less', 'shell:jekyll_dev', 'copy']);
  grunt.registerTask('serve', ['express', 'watch']);
  grunt.registerTask('stage', ['config:stage', 'clean', 'less', 'shell:jekyll_stage', 'copy']);
  grunt.registerTask('deploy', ['config:deploy', 'clean', 'less', 'shell:jekyll_deploy', 'copy']);
};
