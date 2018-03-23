define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__logger_service = Object.create(_root);
  const $console = dartx.console;
  src__logger_service.Logger = class Logger extends core.Object {
    log(msg) {
      return html.window[$console].log(msg);
    }
    error(msg) {
      return html.window[$console].error(msg);
    }
    warn(msg) {
      return html.window[$console].warn(msg);
    }
  };
  (src__logger_service.Logger.new = function() {
  }).prototype = src__logger_service.Logger.prototype;
  dart.addTypeTests(src__logger_service.Logger);
  dart.setMethodSignature(src__logger_service.Logger, () => ({
    __proto__: dart.getMethods(src__logger_service.Logger.__proto__),
    log: dart.fnType(dart.void, [core.Object]),
    error: dart.fnType(dart.void, [core.Object]),
    warn: dart.fnType(dart.void, [core.Object])
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/logger_service.ddc", {
    "package:developer_guide_intro/src/logger_service.dart": src__logger_service
  }, '{"version":3,"sourceRoot":"","sources":["logger_service.dart"],"names":[],"mappings":";;;;;;;;;;QAMW,GAAU;YAAK,YAAM,UAAQ,IAAI,CAAC,GAAG;IAAC;UACpC,GAAU;YAAK,YAAM,UAAQ,MAAM,CAAC,GAAG;IAAC;SACzC,GAAU;YAAK,YAAM,UAAQ,KAAK,CAAC,GAAG;IAAC;;;EACnD","file":"logger_service.ddc.js"}');
  // Exports:
  return {
    src__logger_service: src__logger_service
  };
});

//# sourceMappingURL=logger_service.ddc.js.map
