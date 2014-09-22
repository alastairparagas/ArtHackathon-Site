(function () {
    'use strict';

    var gulp = require('gulp'),
        shell = require('gulp-shell'),
        sass = require('gulp-sass'),
        watch = require('gulp-watch'),
        wiredep = require('wiredep').stream;

    gulp.task('sass', function () {
        return gulp.src('styles/scss/**/*.scss').pipe(
            sass({
                outputStyle: 'compressed'
            })
        ).pipe(gulp.dest('styles/css'));
    });
    
    gulp.task('watch', function () {
        gulp.watch('styles/scss/**/*.scss', ['sass']);
        gulp.watch('bower_components', ['wiredep']);
    });
    
    gulp.task('wiredep', function () {
        return gulp.src('index.html').pipe(
            wiredep({
                directory: 'bower_components/'
            })
        ).pipe(gulp.dest(''));
    });
    
    gulp.task('default', ['sass', 'wiredep', 'watch']);
    
}());

    
