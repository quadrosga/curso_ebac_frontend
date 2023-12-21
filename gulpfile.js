const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const sourcemaps = require("gulp-sourcemaps");


function comprimeImg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImg));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(comprimeJS));
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
}