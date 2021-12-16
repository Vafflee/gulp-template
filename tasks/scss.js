import gulp from 'gulp';

// Конфиг
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupMedia from 'gulp-group-css-media-queries';
import sassGlob from 'gulp-sass-glob';
import webpCss from 'gulp-webp-css';
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';
const sass = gulpSass(sassCompiler);


// Работа с html
export default () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isdev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupMedia())
        .pipe(webpCss())
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isdev}))
        .pipe(size({title: "main.css"}))
        .pipe(csso())
        .pipe(rename({suffix: ".min"}))
        .pipe(size({title: "main.min.css"}))
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: true}))
};