const copyRoot = () => {
  return $.gulp
    .src(`${$.config.root.source}/root/**/*.*`, {
      since: $.gulp.lastRun(copyRoot),
    })
    .pipe($.gulp.dest($.config.root))
}

module.exports = copyRoot
