import gulp from 'gulp';

// Конфиг
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupMedia from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';

// Работа с html
export default () => {
    return gulp.src(path.css.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe(cssimport())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupMedia())
        .pipe(webpCss())
        .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isdev}))
        .pipe(size({title: "main.css"}))
        .pipe(csso())
        .pipe(rename({suffix: ".min"}))
        .pipe(size({title: "main.min.css"}))
        .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isdev}))
};