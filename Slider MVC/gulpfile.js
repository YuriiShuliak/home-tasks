const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
})

gulp.task('js', function () {
    gulp.src('./app/js/app.js')
        .pipe(webpack({
            output: {
                filename: 'app.bundle.js',
            },
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
})

gulp.task('styles', function () {
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
})

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})

gulp.task('img', function () {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
})

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('watch', function () {
    gulp.watch('./app/scss/**/*.scss', ['styles'])
    gulp.watch('./app/*.html', ['html'])
    gulp.watch('./app/js/**/*.js', ['js'])
})

gulp.task('default', ['watch', 'server', 'img'])