'use strict';
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

module.exports = function () {
  $
    .gulp
    .task('js:process', function () {
      const paths = $
        .path
        .app
        .bundles
        .map(bundle => {
          return $.path.app.src + bundle;
        });

      return $
        .gulp
        .src(paths)
        .pipe($.gp.webpack(webpackConfig, webpack))
        .on('error', $.gp.notify.onError({ title: 'JS' }))
        .pipe($.gulp.dest($.config.root + '/assets/js'))
        .pipe($.browserSync.stream());
    });
};
