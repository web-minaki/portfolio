const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { deleteAsync } = require('del');

const paths = {
  html: {
    src: 'src/html/**/*.html',
    dest: 'dist/'
  },
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets/'
  }
};

function clean() {
  return deleteAsync(['dist/**', '!dist']);
}

function html() {
  return src(['src/html/**/*.html', '!src/html/parts/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function styles() {
  return src('src/scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(paths.js.src)
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream());
}

function copyAssets() {
  return src(paths.assets.src)
    .pipe(dest(paths.assets.dest))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: false
  });

  watch(paths.html.src, html);
  watch(paths.scss.src, styles);
  watch(paths.js.src, scripts);
  watch(paths.assets.src, copyAssets);
}

const build = series(
  clean,
  parallel(html, styles, scripts, copyAssets)
);

exports.default = series(build, serve);
exports.build = build;

const fileinclude = require('gulp-file-include');