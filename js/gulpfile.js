var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});


gulp.task('sass', function() {
	//define the gulp-sass task 
	return gulp.src('./sass/**/*.scss')
	.pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./css'));
    });

gulp.task('sass:watch', function () {
    gulp.watch('.sass/**/*.scss', ['sass']);
});
