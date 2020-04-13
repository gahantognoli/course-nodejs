const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minha_task', () => {
    return gulp.src(['./gulp.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('observar', () => {
    gulp.watch(['./gulp.js'], ['minha_task']);
});
