const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const paths = {
  scss: {
    src: "src/styles/scss/**/*.scss",
    dest: "src/styles/css"
  }
};

function compileSCSS() {
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.scss.dest));
}

function watchFiles() {
  gulp.watch(paths.scss.src, compileSCSS);
}

const build = gulp.series(compileSCSS);
const watch = gulp.parallel(watchFiles);

exports.compileSCSS = compileSCSS;
exports.watch = watch;
exports.default = build;
