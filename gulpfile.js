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

exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImg));
}