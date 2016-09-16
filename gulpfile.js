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
var graphJSFiles        = ['js/graph/*.js'];
var barGraphJSFiles     = ['js/bargraph/*.js'];


gulp.task('default', function ()
{
    return gulp.src(javaScriptFiles)
        .pipe(concat('js/d3jsTutorial.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('bargraph', function ()
{
    return gulp.src(barGraphJSFiles)
        .pipe(concat('js/d3jsBarGraph.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('graph', function ()
{
    return gulp.src(graphJSFiles)
        .pipe(concat('js/d3jsGraph.js'))
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
    gulp.watch('js/general/*.js', ['scripts']);
    gulp.watch('js/graph/*.js', ['graph']);
    gulp.watch('js/bargraph/*.js', ['bargraph']);
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


