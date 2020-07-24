const copyImage = () => {
  return $.gulp
    .src(`${$.config.source}/images/**/*.*`, {
      since: $.gulp.lastRun(copyImage),
    })
    .pipe($.gulp.dest(`${$.config.root}/assets/img`))
}

module.exports = copyImage
