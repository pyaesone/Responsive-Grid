var gulp = require('gulp'),
    path = require('path'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass');

gulp.task( 'compass',function() {
    gulp.src('./src/sass')
        .pipe(compass({
            config_file: './config.rb',
            project: path.join(__dirname),
            css: 'dist/css',
            sass: 'src/sass'
        }))
} );
