import gulp from 'gulp';

// Конфиг
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import webpHtml from 'gulp-webp-html';
import pug from 'gulp-pug';

// Работа с pug
export default () => {
    return gulp.src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Pug",
            message: error.message
        }))
    }))
    .pipe(pug(app.pug))
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest));
};