// 导入需要的模块
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();


// 编译less，其中plumber是防止出错崩溃的插件
gulp.task('sass', function() {
  gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});


// 默认任务
gulp.task('default', ['watch']);

// 监听任务
gulp.task('watch', function() {

  // 建立浏览器自动刷新服务器
  browserSync.init({
    server: {
      baseDir: "public"
    }
  });


  // 自动刷新
  gulp.watch('public/**', function() {
    browserSync.reload();
  });

});