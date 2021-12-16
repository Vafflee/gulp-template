import gulp from 'gulp';

// Конфиг
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpHtml from 'gulp-webp-html';

// Работа с html
const html = () => {
    return gulp.src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(size({ title: "Html до сжатия"}))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "Html после сжатия"}))
    .pipe(gulp.dest(path.html.dest));
};

module.exports = html;