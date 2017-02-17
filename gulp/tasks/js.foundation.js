'use strict';

module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });
};
