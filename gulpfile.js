var imageMin = require("gulp-imagemin");
var gulp = require("gulp");

gulp.task('imageMimi',() =>{

    gulp.src('src/**/*').pipe(imageMin()).pipe(gulp.dest('src/'));

})