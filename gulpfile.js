'use strict';

var gulp = require('gulp'),
watch = require('gulp-watch'),
changed = require('gulp-changed'),
plumber = require('gulp-plumber'),
prefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
symlink = require('gulp-symlink'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
rigger = require('gulp-rigger'),
cssmin = require('gulp-minify-css'),
imagemin = require('gulp-imagemin'),
del = require('del'),
cache = require('gulp-cache'),
jade = require('jade'),
gulpJade = require('gulp-jade'),
babel = require("gulp-babel"),
// notify = require('gulp-notify'),
browserSync = require("browser-sync"),
reload = browserSync.reload;

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    pic: 'build/pic/',
    fonts: 'build/fonts/',
    vendor: 'build/vendor/'
  },
  src: {
    // html: 'src/html/*.html',
    jade: 'src/jade/*.jade',
    js: 'src/js/*.js',
    styles: 'src/sass/application.scss',
    img: 'src/img/**/*',
    pic: 'src/pic/**/*',
    fonts: 'src/fonts/**/*',
    vendor: 'src/vendor/**/*'
  },
  watch: {
    // html: 'src/html/**/*',
    html: 'src/jade/**/*',
    js: 'src/js/**/*.js',
    styles: 'src/sass/**/*',
    img: 'src/img/**/*',
    pic: 'src/pic/**/*',
    fonts: 'src/fonts/**/*',
    vendor: 'src/vendor/**/*'
  },
  clean: 'build/*'
};

var config = {
  server: {
    baseDir: "build"
  },
  open: false,
  tunnel: false,
  host: "markup",
  port: 9000,
  logPrefix: "markup"
};

gulp.task('server', function () {
  browserSync(config);
});

gulp.task('clean:build', function (cb) {
  del(path.clean);
});

gulp.task('clean:cache', function (cb) {
  cache.clearAll(cb);
});

// gulp.task('symlink', function (cb) {
//   gulp.src(path.src.vendor_symlink)
//     .pipe(symlink(path.build.vendor_symlink, {force: true}));
// });

// Jade
gulp.task('build:jade', function(){
  return gulp.src(path.src.jade)
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
  // gulp.src('app/template/*.jade')
    // .pipe(jade())
    // .pipe(notify("Done!"))
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('build:vendor', function() {
  gulp.src(path.src.vendor)
    .pipe(changed(path.build.vendor, {hasChanged: changed.compareSha1Digest}))
  .pipe(gulp.dest(path.build.vendor));
});

// gulp.task('build:html', function () {
//   gulp.src(path.src.html)
//     .pipe(plumber())
//     // .pipe(rigger())
//   .pipe(gulp.dest(path.build.html))
//   .pipe(reload({stream: true}));
// });

//BABEL
gulp.task("build:js", function () {
  return gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015',"react"]
      }))
      // .pipe(uglify())
      .pipe(changed(path.build.js, {hasChanged: changed.compareSha1Digest}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('build:styles', function () {
  gulp.src(path.src.styles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(prefixer({ browsers: ['last 2 versions', 'ie >= 9', 'Android >= 30','iOS 7'] }))
      .pipe(changed(path.build.css, {hasChanged: changed.compareSha1Digest}))
      // .pipe(cssmin({processImportFrom: ['!fonts.googleapis.com']}))
    .pipe(sourcemaps.write())
  .pipe(gulp.dest(path.build.css))
  .pipe(reload({stream: true}));
});

gulp.task('build:images', function () {
  gulp.src(path.src.img)
    .pipe(changed(path.build.img, {hasChanged: changed.compareSha1Digest}))
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest(path.build.img));
  // .pipe(notify({ message: 'build:images completed' }));
});

gulp.task('build:pictures', function () {
  gulp.src(path.src.pic)
    .pipe(changed(path.build.pic, {hasChanged: changed.compareSha1Digest}))
  .pipe(gulp.dest(path.build.pic));
});

gulp.task('build:fonts', function() {
  gulp.src(path.src.fonts)
    .pipe(changed(path.build.fonts, {hasChanged: changed.compareSha1Digest}))
  .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build:prepare', ['build:vendor']);

gulp.task('build', [
  'build:prepare',
  'build:jade',
  // 'build:html',
  'build:js',
  'build:styles',
  'build:fonts',
  'build:images',
  'build:pictures'
]);

gulp.task('clean', [
  'clean:build',
  'clean:cache'
]);

gulp.task('watch', function(){
  gulp.watch(path.watch.html, ['build:jade']);
  // gulp.watch(path.watch.html, ['build:html']);
  gulp.watch(path.watch.styles, ['build:styles']);
  gulp.watch(path.watch.js, ['build:js']);
  gulp.watch(path.watch.img, ['build:images']);
  gulp.watch(path.watch.pic, ['build:pictures']);
  gulp.watch(path.watch.fonts, ['build:fonts']);
});

gulp.task('default', ['build', 'server', 'watch']);
