// задача - копирование файлов шрифтов из папки исходников в итоговую папку

const copyFont = () => {
  return $.gulp
    .src(`${$.config.source}/fonts/**/*.*`, { since: $.gulp.lastRun(copyFont) }) //копируем только вновь добавленные шрифты
    .pipe($.gulp.dest(`${$.config.root}/assets/fonts`)) // путь к итоговой папке
}

module.exports = copyFont
