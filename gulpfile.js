const { watch, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const buildSass = () => {
  return src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "src/"
  });

  watch('src/scss/**/*.scss', buildSass);
  watch('src/*.html').on('change', browserSync.reload);
};

exports.default = browserSyncJob;
exports.build = buildSass;
