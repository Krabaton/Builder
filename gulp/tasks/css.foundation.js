'use strict'
const cssFoundation = () => {
  return $.gulp
    .src($.path.cssFoundation)
    .pipe($.gp.concatCss('foundation.css'))
    .pipe($.gp.csso())
    .pipe($.gp.if(!$.isDev, $.gp.rename({ suffix: '.min' })))
    .pipe($.gulp.dest($.config.root + '/assets/css'))
}

module.exports = cssFoundation
