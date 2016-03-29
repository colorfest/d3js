var gulp        = require('gulp');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');
var del         = require('del');
var browserSync = require('browser-sync');

var buildDir    = 'bin/';


gulp.task('default', function ()
{
    var js  = gulp.src('javaScriptFiles');
    return js.pipe(concat('d3jsproject.js'))
        .pipe(gulp.dest('src'));
});


