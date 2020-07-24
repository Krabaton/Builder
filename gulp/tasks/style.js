const style = () => {
  return $.gulp
    .src(`${$.config.source}/style/app.scss`, {
      sourcemaps: $.isDev ? true : false,
    })
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({ title: 'Style' }))
    .pipe($.gp.autoprefixer())
    .pipe($.gp.if(!$.isDev, $.gp.csso()))
    .pipe($.gp.if(!$.isDev, $.gp.rename({ suffix: '.min' })))
    .pipe(
      $.gulp.dest(`${$.config.root}/assets/css`, {
        sourcemaps: $.isDev ? '.' : false,
      }),
    )
    .pipe($.browserSync.stream())
}

module.exports = style
