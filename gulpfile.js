var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver'),
    scss = require('gulp-sass');

var prod = './production',
    build = './build';

gulp.task('js', function() {
  return gulp.src(build + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })/*
    .pipe(babel({
        presets: ['es2015', 'react']
    }))*/
    .pipe(gulp.dest(prod + '/js/'));
});

gulp.task('html', function() {
  gulp.src( build + '/**/*.html');
});

gulp.task('scss', function() {
    gulp.src(build + '/scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest(prod + '/css/'));
});

gulp.task('css', function() {
    gulp.src( build + '/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch( build + '/js/**/*.js', ['js']);
  gulp.watch( build + '/scss/*.scss', ['scss']);
  gulp.watch( build + '/css/**/*.css', ['css']);
  gulp.watch([ build + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
    gulp.src(build + '/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8081,
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'scss', 'css']);
