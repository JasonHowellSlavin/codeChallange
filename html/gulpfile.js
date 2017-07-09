const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const src = {
    sass: './src/styles/*.scss',
    jsFiles: './src/scripts/*.js',
};

const dest = {
    css: './dist/styles',
};

gulp.task('sass', function () {
    return gulp.src(src.sass)
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest(dest.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(src.sass, ['sass']);
});

gulp.task('build:local', [
    'sass',
    'sass:watch',
]);

gulp.task('default', [
    'build:local',
]);


