var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// Static server
gulp.task('default', function() {
	browserSync.init({
		server: {
			basedir: "./"
		}
	});
	// all browsers reload after tasks are complete.
	gulp.watch('*.html').on('change', reload);
	gulp.watch('./templates/*.html').on('change', reload);
	gulp.watch('./js/*.js').on('change', reload);
	gulp.watch('./css/*.css').on('change', reload);
});

