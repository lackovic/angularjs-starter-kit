const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const runSequence = require('run-sequence');

const scripts = require('./scripts');
const styles = require('./styles');
const templates = require('./templates');

const browserSync = require('browser-sync').create();

function browserSyncReload() {
    return browserSync.reload({
        stream: true
    })
}

const buildDir = './dist/';

gulp.task('css', () =>
    gulp.src(styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
);

gulp.task('js', () =>
    gulp.src(scripts)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
);

gulp.task('html', () =>
    gulp.src(templates)
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
);

gulp.task('assets', () => {
    return gulp.src([
            'assets/**/*'
        ])
        .pipe(gulp.dest(buildDir))
        .pipe(browserSyncReload());
});

gulp.task('browser-sync', () => {
    browserSync.init(null, {
        open: true,
        server: {
            baseDir: buildDir
        }
    })
});

gulp.task('clean', () => del([buildDir]));

gulp.task('build', ['css', 'js', 'html', 'assets']);

gulp.task('default', callback => {
    runSequence('clean', 'build', 'browser-sync', callback);
    gulp.watch(['./src/**/*.css'], ['css']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch(['./assets/**/*.*'], ['assets']);
});