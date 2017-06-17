// задача - cоздание прайтов из png исходников

'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/icons/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png', // итоговый спрайт
      cssName: 'sprite.scss', // файл стилей
      algorithm: 'left-right',
      padding: 20
    }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest('./source/images')); // путь куда записываем спрайт

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./source/style/config')); // путь куда записываем файл стилей для спрайта

    return $.merge(imgStream, cssStream);
  });

};