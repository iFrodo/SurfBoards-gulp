const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
// const px2  = require('gulp-smile-px2');
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");
const env = process.env.NODE_ENV;
const {
  SRC_PATH,
  DIST_PATH,
  STYLE_LIBS,
  JS_LIBS,
} = require("./gulp.config.js");
// const styles = [
//   "node_modules/normalize.css/normalize.css",
//   "src/scss/main.scss",
// ];
// const libs = ["src/js/*.js"];
task("server", () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    open: false,
  });
});

task("clean", () => {
  console.log(env);
  return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});
task("copy:html", () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("styles", () => {
  return (
    src([...STYLE_LIBS, "src/scss/main.scss"])
      .pipe(gulpif(env === "dev", sourcemaps.init()))
      .pipe(concat("main.scss"))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      // .pipe(px2())
      .pipe(
        gulpif(
          env === "prod",
          autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false,
          })
        )
      )
      .pipe(gulpif(env === "prod", gcmq()))
      .pipe(gulpif(env === "prod", cleanCSS()))
      .pipe(gulpif(env === "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }))
  );
});
task("scripts", () => {
  return (
    src(["src/js/*.js"])
      .pipe(gulpif(env === "dev", sourcemaps.init()))
      .pipe(concat("main.min.js", { newLine: ";" }))
      // .pipe(gulpif(env === 'prod', babel({
      //   presets: ['@babel/env']
      // })))
      .pipe(gulpif(env === "prod", uglify()))
      .pipe(gulpif(env === "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
  );
});
task("img", () => {
  return src("src/img/img/*.*").pipe(dest("dist/img/"));
});
// task("video", () => {
//   return src("src/img/img/*.mp4").pipe(dest("dist/img/"));
// });
task("svg", () => {
  return (
    src("src/img/*.svg")
      // .pipe(
      //   svgo({
      //     plugins: [
      //       {
      //          oveAttrs: {
      //         //   attrs: "(fill|stroke|style|width|height|data.*)",
      //         },
      //       },
      //     ],
      //   })
      // )
      .pipe(dest("dist/img/"))
  );
});

task("watch", () => {
  watch("./src/scss/**/*.scss", series("styles"));
  watch("./src/*.html", series("copy:html"));
  watch("./src/js/*.js", series("scripts"));
  watch("./src/img/*.svg", series("icons"));
  watch("./src/img/*.*", series("img"));
  // watch("./src/img/*.mp4", series("video"));
});

task(
  "default",
  series(
    "clean",
    parallel("copy:html", "styles", "scripts", "svg", "img",)
  ),
  parallel("watch", "server")
);
task('build',
 series(
   'clean',
   parallel('copy:html', 'styles', 'scripts', 'svg'))
);