
import gulp from 'gulp';
import browsersync from 'browser-sync';

// Конфиг
import path from './config/path.js';
import app from './config/app.js';

// Задачи
import clear from './tasks/clear.js';
import pug from './tasks/pug.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import font from './tasks/font.js';

// Сервер
const server = () => {
    browsersync.init({
        server: {
            baseDir: path.root
        }
    })
};

// Наблюдение
const watcher = () => {
    // watch(path.pug.watch).on('all', series(pug, browsersync.reload));
    gulp.watch(path.pug.watch).on('all', gulp.series(pug, browsersync.reload));
    gulp.watch(path.scss.watch).on('all', gulp.series(scss, browsersync.reload));
    gulp.watch(path.js.watch).on('all', gulp.series(js, browsersync.reload));
    gulp.watch(path.img.watch).on('all', gulp.series(img, browsersync.reload));
    gulp.watch(path.font.watch).on('all', gulp.series(font, browsersync.reload));
}

// Задачи
export {pug};
export {scss};
export {js};
export {img};
export {clear};
export {font};

const build = gulp.series(
    clear,
    gulp.parallel(pug, scss, js, img, font),
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

export default app.isprod ? build : dev;