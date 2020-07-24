const merge = require('merge-stream')
const rollup = require('rollup-stream')
const sourcemaps = require('gulp-sourcemaps')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const terser = require('gulp-terser')
const path = require('path')

const jsProcess = () => {
  const jsStream = $.path.app.bundles.map((file) => {
    return rollup({
      input: `${$.config.source}/js/${file}`,
      sourcemap: $.isDev ? true : false,
      format: 'es',
    })
      .pipe(source(`${path.parse(file).name}.bundle.js`))
      .pipe(buffer())
      .pipe($.gp.if(!$.isDev, terser()))
      .pipe($.gp.if($.isDev, sourcemaps.init({ loadMaps: true })))
      .pipe($.gp.if($.isDev, sourcemaps.write('.')))
      .pipe($.gulp.dest(`${$.config.root}/assets/js`))
      .pipe($.browserSync.stream())
  })

  return merge(jsStream)
}

module.exports = jsProcess
