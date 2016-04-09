var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var rename = require('gulp-rename');

module.exports = function(htaccessConfig, destination){
    gulp.task('htaccess', ['clean'], function(){
        return gulp.src(htaccessConfig.srcFile)
            .pipe(rename('.htaccess'))
            .pipe(gulp.dest(destination))
    });
};
