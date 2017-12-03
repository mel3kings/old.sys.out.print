const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

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
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_module/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
})

//Watch sass and server
gulp.task('serve', ['sass'], function(){
   browserSync.init({
       server: "./src"
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

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);