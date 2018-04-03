/**
 * Created by Administrator on 2017/11/30.
 */
//要想使用gulp，我们需要先导入gulp这个包
var gulp = require('gulp');
var phgap_scss = require('gulp-sass');
var phgap_concat = require('gulp-concat');
var phgap_uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

//定义gulp任务
//使用gulp的task方法：
//1. 参数1：任务名称
//2. 任务要做的事情
//phgap_gulp.task('test', function () {
//    console.log('hello gulp');
//})

//定义一个拷贝index.html的任务
gulp.task('index', function () {
    //gulp.src 将指定路径的文件读取到内存中
    //pipe()可以将前边的函数执行的输出，作为参数内函数执行的输入
    //gulp.dest()将输入的内容写到指定位置
    gulp.src('./src/index.html').pipe(gulp.dest('./dist'))

})

gulp.task('vendor', function () {
    gulp.src('./src/vendor/**/*').pipe(gulp.dest('./dist/vendor'))
})

gulp.task('html', function () {
    gulp.src('./src/html/*.html').pipe(gulp.dest('./dist/html'));
})

gulp.task('img', function () {
    gulp.src('./src/imgs/**/*.{jpg,png,gif}').pipe(gulp.dest('./dist/resource/imgs'))
})

//task方法的第二个参数是当前任务所依赖的任务
gulp.task('copy', ['index', 'vendor', 'html', 'img'], function () {
    console.log('拷贝完成')
})

//编译sass需要使用插件gulp-sass
//使用插件：
//  1. 安装插件，安装后，这个插件就被安装到了node_modules下
//  2. require('gulp-sass')
//  3. 使用Ta编译scss文件
gulp.task('scss', function () {
    gulp.src('./src/scss/**/*.scss').pipe(phgap_scss({outputStyle: 'compressed'})).pipe(gulp.dest('./dist/css'))
})

//js的连接，使用gulp-concat
//js的压缩，使用gulp-uglify
gulp.task('js', function () {
    //先连接，再压缩
    gulp.src('./src/js/**/*.js').pipe(phgap_concat('output.js')).pipe(phgap_uglify()).pipe(gulp.dest('./dist/js'))
})

gulp.task('build', ['copy', 'scss', 'js'], function () {

})

gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['build'])
    gulp.watch('./dist/**/*', ['reload'])
})

gulp.task('reload', function () {
    gulp.src('./dist/**/*.html').pipe(connect.reload())
})

gulp.task('server', function () {
    connect.server({
        root: './dist',
        livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/ec/api',  {
                    target: 'http://localhost',
                    changeOrigin:true
                })
            ]
        }
    })
})

gulp.task('default', ['watch', 'server'], function () {

})

//gulp.task gulp.src gulp.pipe gulp.dest gulp.watch