define(function (require, exports) {
  'use strict';
  const config = require('@modules/cjs');

  exports.resolve = () =>
    config.resolveProject ? config.resolveProject() : config.project;
});
