const spriteSvg = () => {
  return $.gulp
    .src(`${$.config.source}/sprite/*.svg`, {
      since: $.gulp.lastRun(spriteSvg),
    })
    .pipe(
      $.gp.svgmin({
        js2svg: {
          pretty: true,
        },
      }),
    )
    .pipe(
      $.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill')
          $('[stroke]').removeAttr('stroke')
          $('[style]').removeAttr('style')
        },
        parserOptions: {
          xmlMode: true,
        },
      }),
    )
    .pipe($.gp.replace('&gt;', '>'))
    .pipe(
      $.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
            example: {
              dest: '../tmp/spriteSvgDemo.html', // демо html
            },
          },
        },
      }),
    )
    .pipe($.gulp.dest(`${$.config.root}/assets/img`))
}

module.exports = spriteSvg
