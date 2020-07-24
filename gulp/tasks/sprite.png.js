const merge = require('merge-stream')

const spritePng = () => {
  const spriteData = $.gulp.src('./source/icons/*.png').pipe(
    $.gp.spritesmith({
      imgName: 'sprite.png', // итоговый спрайт
      cssName: 'sprite.scss', // файл стилей
      algorithm: 'left-right',
      padding: 20,
    }),
  )

  const imgStream = spriteData.img.pipe($.gulp.dest('./source/images')) // путь куда записываем спрайт

  const cssStream = spriteData.css.pipe($.gulp.dest('./source/style/config')) // путь куда записываем файл стилей для спрайта

  return merge(imgStream, cssStream)
}

module.exports = spritePng
