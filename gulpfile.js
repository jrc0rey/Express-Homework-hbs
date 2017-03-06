var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch(['./server/public/*.less'], ['compile-less'])
});

gulp.task('compile-less', function(){
	gulp.src('./server/public/*.less').pipe(less()).pipe(gulp.dest('./server/public/style/'))
});

gulp.task('default', ['compile-less', 'watch']);