const gulp = require('gulp');
const concat = require('gulp-concat');

const scripts = require('./scripts');
const styles = require('./styles');
const templates = require('./templates');

const buildDir = './dist';

gulp.task('css', function () {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(buildDir + '/js'));
});

gulp.task('html', function () {
    gulp.src(templates)
        .pipe(gulp.dest(buildDir + '/'));
});

gulp.task('build', ['css','js','html']);

gulp.task('default', ['build']);