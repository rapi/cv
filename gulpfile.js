var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
    compile_js();
    // compile_sass();

});

function compile_js() {
    gutil.log('-----------------------------------');
    gutil.log('------------COMPILE JS!----------');
    gutil.log('-----------------------------------');
    return gulp.src('./resources/assets/js/app.js')
        .pipe(plumber())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./static/js'));
}

function compile_sass() {
    gutil.log('-----------------------------------');
    gutil.log('------------COMPILE SASS!----------');
    gutil.log('-----------------------------------');

        return gulp.src('./resources/assets/sass/**/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./public/css'));
}
