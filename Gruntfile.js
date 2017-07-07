/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GRUNT
 * The grunt wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/

module.exports = function (grunt) {
  var theme = grunt.option('theme');

  var path = require('path'),
    argv = require('minimist')(process.argv.slice(2));


  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-babel');

  /******************************************************
   * PATTERN LAB CONFIGURATION
  ******************************************************/

  //read all paths from our namespaced config file
  var config = require('./patternlab-config.json'),
    pl = require('patternlab-node')(config);

  function paths() {
    return config.paths;
  }

  function getConfiguredCleanOption() {
    return config.cleanPublic;
  }

  grunt.registerTask('patternlab', 'create design systems with atomic design', function (arg) {

    if (arguments.length === 0) {
      pl.build(function () { }, getConfiguredCleanOption());
    }

    if (arg && arg === 'version') {
      pl.version();
    }

    if (arg && arg === "patternsonly") {
      pl.patternsonly(function () { }, getConfiguredCleanOption());
    }

    if (arg && arg === "help") {
      pl.help();
    }

    if (arg && arg === "liststarterkits") {
      pl.liststarterkits();
    }

    if (arg && arg === "loadstarterkit") {
      pl.loadstarterkit(argv.kit, argv.clean);
    }

    if (arg && (arg !== "version" && arg !== "patternsonly" && arg !== "help" && arg !== "starterkit-list" && arg !== "starterkit-load")) {
      pl.help();
    }
  });

  updateConfig = function () {

    // Copying patternlab files
    var files = [
      { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js', dest: path.resolve(paths().public.js) },
      { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js.map', dest: path.resolve(paths().public.js) },
      { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css', dest: path.resolve(paths().public.css) },
      { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css.map', dest: path.resolve(paths().public.css) },
      { expand: true, cwd: path.resolve(paths().source.images), src: '**/*', dest: path.resolve(paths().public.images) },
      { expand: true, cwd: path.resolve(paths().source.fonts), src: '**/*', dest: path.resolve(paths().public.fonts) },
      { expand: true, cwd: path.resolve(paths().source.root), src: 'favicon.ico', dest: path.resolve(paths().public.root) },
      { expand: true, cwd: path.resolve(paths().source.styleguide), src: ['*', '**'], dest: path.resolve(paths().public.root) },
      // slightly inefficient to do this again - I am not a grunt glob master. someone fix
      { expand: true, flatten: true, cwd: path.resolve(paths().source.styleguide, 'styleguide', 'css', 'custom'), src: '*.css)', dest: path.resolve(paths().public.styleguide, 'css') }
    ]

    // Copying theme files
    var localSrc;

    if (theme) {
      cwd = paths().source.themes + '/' + theme;
    } else {
      cwd = paths().source.themes + '/default';
    }

    var themeDest = paths().source.themes + '/';

    themeFiles = [];
    themeFiles.push({ expand: true, cwd: path.resolve(cwd), src: '*', dest: path.resolve(themeDest) });

    grunt.config('copy', {
      main: { 'files': files },
      theme: { 'files': themeFiles }
    })
  };

  grunt.initConfig({
    clean: {
      initial: ["source/css/style.css", "source/css/style.css.map", "source/css/scss/themes/*.scss", "source/js/uikit.js"],
      uglifyFiles: ["src", "src.map", "dest", "dest.map"]
    },
    sass: {
      dist: {
        options: {
          sourceMap: true
        },
        files: {
          "source/css/style.css": "source/css/style.scss"
        }
      }
    },
    watch: {
      all: {
        files: [
          path.resolve(paths().source.css + '**/*.css'),
          path.resolve(paths().source.styleguide + 'css/*.css'),
          path.resolve(paths().source.css + '**/*.scss'),
          path.resolve(paths().source.patterns + '**/*'),
          path.resolve(paths().source.fonts + '/*'),
          path.resolve(paths().source.images + '/*'),
          path.resolve(paths().source.data + '*.json'),
          path.resolve(paths().source.js + '/*.js'),
          path.resolve(paths().source.root + '/*.ico')
        ],
        tasks: ['default', 'bsReload:css']
      }
    },
    browserSync: {
      dev: {
        options: {
          server: path.resolve(paths().public.root),
          watchTask: true,
          watchOptions: {
            ignoreInitial: true,
            ignored: '*.html'
          },
          snippetOptions: {
            // Ignore all HTML files within the templates folder
            blacklist: ['/index.html', '/', '/?*']
          },
          plugins: [
            {
              module: 'bs-html-injector',
              options: {
                files: [path.resolve(paths().public.root + '/index.html'), path.resolve(paths().public.styleguide + '/styleguide.html')]
              }
            }
          ],
          notify: {
            styles: [
              'display: none',
              'padding: 15px',
              'font-family: sans-serif',
              'position: fixed',
              'font-size: 1em',
              'z-index: 9999',
              'bottom: 0px',
              'right: 0px',
              'border-top-left-radius: 5px',
              'background-color: #1B2032',
              'opacity: 0.4',
              'margin: 0',
              'color: white',
              'text-align: center'
            ]
          }
        }
      }
    },
    bsReload: {
      css: path.resolve(paths().public.root + '**/*.css')
    },
    concat: {
      options: {
        separator: '\n'
      },
      uikit: {
        src: path.resolve(paths().source.uikit + '**/module.js'),
        dest: path.resolve(paths().source.js + '/uikit.js')
      },
      patterns: {
        src: path.resolve(paths().source.patterns + '**/*.js'),
        dest: path.resolve(paths().source.js + '/actgov.js')
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      uikit: {
        files: {
          src: path.resolve(paths().source.js + '/uikit.js'),
          dest: path.resolve(paths().source.js + '/uikit.js')
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      uikit: {
        files: [
          {
            expand: true,
            cwd: './source/js/',
            src: 'uikit.js',
            dest: './source/js/',
            ext: '.min.js'
          }
        ]
      }
    }
  });

  updateConfig();

  /******************************************************
   * COMPOUND TASKS
  ******************************************************/

  grunt.registerTask('default', ['clean:initial', 'copy:theme', 'sass', 'concat:patterns', 'concat:uikit', 'babel', 'uglify:uikit', 'clean:uglifyFiles', 'patternlab', 'copy:main']);
  grunt.registerTask('patternlab:build', ['copy:theme', 'patternlab', 'copy:main']);
  grunt.registerTask('patternlab:watch', ['copy:theme', 'patternlab', 'copy:main', 'watch:all']);
  grunt.registerTask('patternlab:serve', ['clean:initial', 'copy:theme', 'sass', 'concat:patterns', 'concat:uikit', 'babel', 'uglify:uikit', 'clean:uglifyFiles', 'patternlab', 'copy:main', 'browserSync', 'watch:all']);
};
