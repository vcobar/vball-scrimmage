var gulp        = require('gulp');       // task runner/builder
var gutil       = require('gulp-util'); //logging - debugging
var source      = require('vinyl-source-stream');
var browserify  = require('browserify'); // dependancy management
var watchify    = require('watchify'); // re-run our gulp file when file changes
var reactify    = require('reactify'); // converting jsx to js

gulp.task('default', function() {
  // create bundler to run browserfy on our codebase
  var bundler = watchify(
                  browserify({
                    entries: ['./src/app.jsx'],
                    transform: [reactify], // tells browserfy compile jsx to js using reactify
                    extensions: ['.jsx'],
                    debug: true,
                    cache: {},
                    packageCache: {},
                    fullPaths: true
                  })
                );

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('application.js'))
      .pipe(gulp.dest('./js/'));
  };
  build()
  bundler.on('update', build)
});

// gulp.task('default', function() {
//   return
//     gulp.src('src/**')
//     .pipe(react())
//     .pipe(concat('application.js'))
//     .pipe(gulp.dest('./js/'))
// });
