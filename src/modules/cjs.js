define(function (require, exports) {
  var $ = require('jquery');
  var { cfg } = require('@modules/es6-module');

  function getProject() {
    var resolvedProject;

    try {
      resolvedProject = cfg.resolveProject ? cfg.resolveProject() : cfg.project;
    } catch (e) {
      console.error('[satellizer:resolveProject] throws an error: ', e);
    }
  }

  return $.extend(false, cfg, {
    afid: 'afid-number',
    subafid: 'subafid-number',
    getProject: getProject,
  });
});
