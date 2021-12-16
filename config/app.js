const isProd = process.argv.includes('--prod');
const isDev = !isProd;

export default {
    isprod: isProd,
    isdev: isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ['eot','ttf','woff','svg']
    }
};