var gulp = require('gulp');
var imagemin = require('gulp-imagemin');


var imagesConfig = require('../config').images.config;

// Image optimization task
module.exports = function(imagesConfig){
    gulp.task('images', ['clean'],  function(){
        return gulp.src(imagesConfig.src)
            .pipe(imagemin())
            .pipe(gulp.dest(imagesConfig.dest));
    });
};