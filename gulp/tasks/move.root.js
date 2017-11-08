'use strict';

module.exports = function() {
  $.gulp.task('copy:root', function() {
    return $.gulp.src('./source/root/**/*.*', { since: $.gulp.lastRun('copy:root') })
      .pipe($.gulp.dest($.config.root));
  });
};