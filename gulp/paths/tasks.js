const nameTask = require('./nameTask')

module.exports = [
  { name: nameTask.STYLE, path: './gulp/tasks/style.js' },
  { name: nameTask.SERVER, path: './gulp/tasks/serve.js' },
  { name: nameTask.COPY_ROOT, path: './gulp/tasks/move.root.js' },
  { name: nameTask.PUG, path: './gulp/tasks/pug.js' },
  { name: nameTask.WATCH, path: './gulp/tasks/watch.js' },
  { name: nameTask.CLEAN, path: './gulp/tasks/clean.js' },
  { name: nameTask.JS_FOUNDATION, path: './gulp/tasks/js.foundation.js' },
  { name: nameTask.CSS_FOUNDATION, path: './gulp/tasks/css.foundation.js' },
  { name: nameTask.JS_PROCESS, path: './gulp/tasks/js.process.js' },
  { name: nameTask.COPY_IMAGE, path: './gulp/tasks/copy.image.js' },
  { name: nameTask.COPY_FONT, path: './gulp/tasks/copy.fonts.js' },
  // './gulp/tasks/sprite.png.js',
  // './gulp/tasks/sprite.svg.js'
]
