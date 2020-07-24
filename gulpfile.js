'use strict'

const { series, parallel, src, dest, lastRun, watch } = require('gulp')
const nameTask = require('./gulp/paths/nameTask')
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'

global.$ = {
  isDev,
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
  },
  tasks: {},
  gulp: { src, dest, lastRun, series, watch },
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-replace-task': 'replaceTask',
    },
  }),
}

$.path.task.forEach(function (task) {
  $.tasks[`${task.name}`] = require(task.path)
  module.exports[`${task.name}`] = $.tasks[`${task.name}`]
})

module.exports.default = series(
  $.tasks[nameTask.CLEAN],
  parallel(
    $.tasks[nameTask.STYLE],
    $.tasks[nameTask.PUG],
    $.tasks[nameTask.JS_FOUNDATION],
    $.tasks[nameTask.JS_PROCESS],
    $.tasks[nameTask.COPY_IMAGE],
    $.tasks[nameTask.COPY_FONT],
    $.tasks[nameTask.CSS_FOUNDATION],
    $.tasks[nameTask.COPY_ROOT],
  ),
  parallel($.tasks[nameTask.WATCH], $.tasks[nameTask.SERVER]),
)

module.exports.build = series(
  $.tasks[nameTask.CLEAN],
  parallel(
    $.tasks[nameTask.STYLE],
    $.tasks[nameTask.PUG],
    $.tasks[nameTask.JS_FOUNDATION],
    $.tasks[nameTask.JS_PROCESS],
    $.tasks[nameTask.COPY_IMAGE],
    $.tasks[nameTask.COPY_FONT],
    $.tasks[nameTask.CSS_FOUNDATION],
    $.tasks[nameTask.COPY_ROOT],
  ),
)

require('./gulp/fix')
