'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    var sourcePath = $.path.app.src,
      bundles = $.path.app.bundles;

    var bundled = bundles.map(function(bundle) {
      return $.browserify({
        entries: sourcePath + bundle,
        debug: true
      })
      .transform($.babel, {presets: ['es2015']})
      .bundle()
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.source(bundle))
      .pipe($.buffer())
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
        loadMaps: true
      })))
      .pipe($.gp.if(!$.dev, $.gp.uglify()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write('./maps')))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
      .pipe($.gulp.dest($.config.root + '/assets/js'));
    });

    return $.merge(bundled);

  });
};
