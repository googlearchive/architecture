define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/logger_service', 'packages/angular/angular.template'], function(dart_sdk, reflector, logger_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__logger_service = logger_service.src__logger_service;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__logger_service$46template = Object.create(_root);
  let VoidToLogger = () => (VoidToLogger = dart.constFn(dart.fnType(src__logger_service.Logger, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__logger_service$46template, {
    /*src__logger_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__logger_service$46template.initReflector = function() {
    if (dart.test(src__logger_service$46template._visited)) {
      return;
    }
    src__logger_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__logger_service.Logger), dart.fn(() => new src__logger_service.Logger.new(), VoidToLogger()));
    angular$46template.initReflector();
  };
  dart.fn(src__logger_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/logger_service.template.ddc", {
    "package:developer_guide_intro/src/logger_service.template.dart": src__logger_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["logger_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAYI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAO,kCAAe,CAAC,yCAAM,EAAE,cAAM,IAAI,8BAAM;AAC/C,IAAM,gCAAa;EACrB","file":"logger_service.template.ddc.js"}');
  // Exports:
  return {
    src__logger_service$46template: src__logger_service$46template
  };
});

//# sourceMappingURL=logger_service.template.ddc.js.map
