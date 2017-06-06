var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('compile-js', function () {
    var tsProject = ts.createProject('tsconfig.json'),
        tsResult = gulp.src("app/ts/index.ts")
            .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('public/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', function () {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
});

gulp.task('watch', ['browser-sync', 'compile-js', 'sass'], function () {
    gulp.watch('app/ts/**/*.ts', ['compile-js']);
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('public/*.html', browserSync.reload); 
});


gulp.task('default', ['watch']);