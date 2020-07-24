const fs = require('fs').promises
const path = require('path')

const jsFoundation = async () => {
  if ($.path.jsFoundation.length === 0) {
    // we create empty js file by default
    await fs.mkdir($.config.root)
    await fs.mkdir(path.join($.config.root, 'assets'))
    await fs.mkdir(path.join($.config.root, 'assets/js'))
    const file = path.join(
      $.config.root,
      'assets/js',
      !$.isDev ? 'foundation.min.js' : 'foundation.js',
    )

    return await fs.writeFile(file, '')
  }
  return $.gulp
    .src($.path.jsFoundation)
    .pipe($.gp.concat('foundation.js'))
    .pipe($.gp.if(!$.isDev, $.gp.rename({ suffix: '.min' })))
    .pipe($.gulp.dest($.config.root + '/assets/js'))
}

module.exports = jsFoundation
