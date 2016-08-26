var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

var jsSource = [
 'app/app-config/app.js',
 'app/components/repo-list/module.js',
 'app/components/repo-list/service.js',
 'app/components/repo-list/component.js',
 'app/components/pullrequest-list/module.js',
 'app/components/pullrequest-list/service.js',
 'app/components/pullrequest-list/component.js',
 'app/components/pushevent-list/module.js',
 'app/components/pushevent-list/service.js',
 'app/components/pushevent-list/component.js',
 'app/components/profile-chart/module.js',
 'app/components/profile-chart/service.js',
 'app/components/profile-chart/component.js',
 'app/components/language-chart/module.js',
 'app/components/language-chart/service.js',
 'app/components/language-chart/component.js',
 'app/components/activity-chart/module.js',
 'app/components/activity-chart/service.js',
 'app/components/activity-chart/component.js'
  ],
    sassSource = 'app/public/css/styles.scss',
    outputDircss = 'dist/css',
    outputDirjs = 'dist/js';

gulp.task('sass', function() {
  gulp.src(sassSource)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(minifyCss())
  .pipe(gulp.dest(outputDircss));
});

gulp.task('js', function() {
  gulp.src(jsSource)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDirjs));
});

gulp.task('watch', function() {
  gulp.watch(jsSource, ['js']);
  gulp.watch(sassSource, ['sass']);
});


gulp.task('default', ['js', 'sass', 'watch']);
