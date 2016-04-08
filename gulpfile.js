var gulp        = require('gulp');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');
var del         = require('del');
var browserSync = require('browser-sync');

var buildDir    = 'bin/';
var javaScriptFiles     = ['js/general/*.js'];


gulp.task('default', function ()
{
    return gulp.src(javaScriptFiles)
        .pipe(concat('js/d3jsTutorial.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function ()
{
    console.log('run scripts!');
    return gulp.src(javaScriptFiles)
        .pipe(concat('js/d3jsTutorial.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('sass', function ()
{
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

/** run watch **/
gulp.task('watch', function ()
{
    gulp.watch('js/**/*.js', ['scripts']);
    //gulp.watch('css/**/*.scss', ['sass']);
});

gulp.task('startBrowser', function ()
{
    browserSync({
        server: {
            baseDir: './'
        }
    })
});


