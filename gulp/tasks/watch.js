const nameTask = require('../paths/nameTask')

const watch = () => {
  $.gulp.watch(
    './source/js/**/*.js',
    $.gulp.series($.tasks[nameTask.JS_PROCESS]),
  )
  $.gulp.watch(
    `${$.config.source}/style/**/*.scss`,
    $.gulp.series($.tasks[nameTask.STYLE]),
  )
  $.gulp.watch(
    `${$.config.source}/**/*.pug`,
    $.gulp.series($.tasks[nameTask.PUG]),
  )
  $.gulp.watch(
    `${$.config.source}/images/**/*.*`,
    $.gulp.series($.tasks[nameTask.COPY_IMAGE]),
  )
}

module.exports = watch
