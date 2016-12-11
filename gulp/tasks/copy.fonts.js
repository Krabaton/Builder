// задача - копирование файлов шрифтов из папки исходников в итоговую папку

'use strict';

module.exports = function() {
  $.gulp.task('copy:font', function() {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:font') }) //копируем только вновь добавленные шрифты
      .pipe($.gulp.dest($.config.root + '/assets/fonts')); // путь к итоговой папке
  });
};