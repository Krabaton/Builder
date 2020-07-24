const server = () => {
  $.browserSync.init({
    open: false,
    server: $.config.root,
  })

  $.browserSync.watch(
    [`${$.config.root}/**/*.*`, '!**/*.css', '!**/*.html'],
    $.browserSync.reload,
  )
}

module.exports = server
