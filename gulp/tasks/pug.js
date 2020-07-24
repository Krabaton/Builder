const pug = () => {
  const patterns = []
  patterns.push({ match: '%=suffix=%', replace: $.isDev ? '' : '.min' })
  patterns.push({
    match: '%=version=%',
    replace: $.isDev ? '' : `?rel=${$.package.version}`,
  })
  //Math.ceil(Math.random()*100000)

  return $.gulp
    .src(`${$.config.source}/template/pages/*.pug`)
    .pipe($.gp.pug({ pretty: true }))
    .on(
      'error',
      $.gp.notify.onError((error) => {
        return {
          title: 'Pug',
          message: error.message,
        }
      }),
    )
    .pipe($.gp.replaceTask({ patterns, usePrefix: false }))
    .pipe($.gulp.dest($.config.root))
    .pipe($.browserSync.stream({ once: true }))
}

module.exports = pug
