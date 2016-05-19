var gulp = require('gulp');
var sass = require('gulp-sass'); //compiles Sass
var browserSync = require('browser-sync').create(); //listens for changes and refreshes the brwoser
var useref = require('gulp-useref'); //puts all JS scripts into 1 JS script
var uglify = require('gulp-uglify'); // minifies JS files
var gulpIf = require('gulp-if') // checks if a files is a particular type for minification
var cssnano = require('gulp-cssnano') // minifies CSS
var del = require('del'); // deletes files/folders as you request
var runSequence = require('run-sequence'); // allows for you to order the process
var babel = require('gulp-babel'); // allows you to convert old JS to ES6
var sourcemaps = require('gulp-sourcemaps'); // allows you to use sourcempas to debugg
var autoprefixer = require('gulp-autoprefixer'); // adds prefixes to CSS files
var jshint = require('gulp-jshint'); // lints JS files

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('../maps'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
    }))
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('concat', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', jshint()))
        .pipe(gulpIf('*.js', jshint.reporter('default')))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
})

gulp.task('clean:dist', function() {
    return del.sync('dist');
})

gulp.task('jsscripts', function() {
    gulp.src(['app/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.js', browserSync.reload);
})

gulp.task('build', function(callback) {
    runSequence('clean:dist', 
        ['sass', 'concat'],
        callback
        )
})

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch', 'jsscripts'],
        callback
        )
})