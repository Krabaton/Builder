'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function() {
  $.gulp.task('js:foundation', function(cb) {
    if ($.path.jsFoundation.length === 0) {
      fs.mkdirSync($.config.root);
      fs.mkdirSync(path.join($.config.root, 'assets'));
      fs.mkdirSync(path.join($.config.root, 'assets/js'));

      let file = path.join($.config.root, 'assets/js');
      file = !$.dev
        ? path.join(file, 'foundation.min.js')
        : path.join(file, 'foundation.js');

      fs.writeFile(file, 'console.log("Hello Node.js")', err => {
        if (err) throw err;
        cb();
      });
    } else {
      return $.gulp
        .src($.path.jsFoundation)
        .pipe($.gp.concat('foundation.js'))
        .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
        .pipe($.gulp.dest($.config.root + '/assets/js'));
    }
  });
};
