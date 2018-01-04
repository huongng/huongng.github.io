var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var config = {
  bootstrapDir: './bower_components/bootstrap',
  srcDir: './src/scss/**/*.scss',
  destDir: './src',
};

gulp.task('compile_sass', function() {
  return gulp
    .src(config.srcDir)
    .pipe(sass({
      includePaths: [config.bootstrapDir + '/scss'],
    }))
    .pipe(gulp.dest(config.destDir + '/css'));
});


gulp.task('watch_scss', function() {
  gulp.watch(config.srcDir, ['compile_sass']);
});

gulp.task('default', ['watch_scss']);