const gulp = require('gulp'), browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');
var webserver = require('gulp-webserver');
var reactify = require('reactify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');


var path = {
    HTML: 'index.html',
    ALL: ['src/index.js', 'src/js/*.js', 'src/js/**/*.js', 'index.html'],
    JS: ['src/index.js','src/js/*.js', 'src/js/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

//Compile Sass & inject to browser
gulp.task('sass', function(){
    //main boostrap file for sass 1st param, 2nd param our sass
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss'
    , 'src/scss/*.scss']) // sass files to compile
        .pipe(sass()) // actually compile
        .pipe(gulp.dest("src/css")) // send to folder
        .pipe(browserSync.stream()); // send to browser
});

//Move js to src/js
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_module/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js','src'])
        .pipe(gulp.dest("."))
        .pipe(browserSync.stream());
})

//Watch sass and server
gulp.task('serve', ['sass'], function(){
   browserSync.init({
       server: "."
   }) ;

   gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss',
   'src/scss/*.scss'], ['sass']);
   gulp.watch("src/*.*").on('change', browserSync.reload);
});


//move fonts
gulp.task('fonts', function(){
    return gulp.src('node_modules/font-awesome/font/*')
        .pipe(gulp.dest("src/fonts"));
})

gulp.task('fa', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("src/css"));
})

gulp.task('react', function(){
    return gulp.src('build/app.js')
        .pipe(gulp.dest("build"));
})

var BUILD_DIR = 'build/';

gulp.task('build', function() {
    var bundler = browserify('src/index.js');
    return bundler
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(BUILD_DIR));
})


gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(BUILD_DIR));
})

gulp.task('transform', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});



gulp.task('default', ['build','js', 'fa', 'fonts','serve']);