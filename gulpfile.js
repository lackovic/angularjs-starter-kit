const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const runSequence = require('run-sequence');

const scripts = require('./scripts');
const styles = require('./styles');
const templates = require('./templates');

const buildDir = './dist/';

gulp.task('css', () =>
    gulp.src(styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(buildDir))
);

gulp.task('js', () =>
    gulp.src(scripts)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(buildDir))
);

gulp.task('html', () =>
    gulp.src(templates)
    .pipe(gulp.dest(buildDir))
);

gulp.task('clean', () => del([buildDir]));

gulp.task('build', ['css', 'js', 'html']);

gulp.task('default', callback => {
    runSequence('clean', ['build'], callback);
});