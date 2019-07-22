const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCss = require('gulp-clean-css'),
      svgmin = require('gulp-svgmin'),
      iconfont = require('gulp-iconfont'),
      iconfontCss = require('gulp-iconfont-css'),
      sassLint = require('gulp-sass-lint');

var fontName = 'Icons';


gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    // .pipe(cleanCss())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('pages', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('imagemin', function() {
  return gulp.src("./src/images/**/*")
  .pipe(gulp.dest("dist/images"))
});

gulp.task('font', function () {
  return gulp.src('src/fonts/*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('scss-lint', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sassLint({
      configFile: '.scss-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
      .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch(['src/scss/**/*.scss', 'src/*.html', 'src/js/*.js'], gulp.series('scss-lint', 'sass', 'pages', 'font', 'js', 'imagemin'))
});

gulp.task('svgmin', function() {
  return gulp.src(['src/images/icons/*.svg'])
    .pipe(svgmin())
    .pipe(gulp.dest('src/images/icons'))
});

gulp.task('iconfont', function() {
  return gulp.src(['src/images/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'src/scss/lib/_icons-template.scss',
      targetPath: 'src/scss/lib/_icons.scss',
      fontPath: '../fonts'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1000,
      prependUnicode: false
    }))
    .pipe(gulp.dest('src/fonts'))
});

