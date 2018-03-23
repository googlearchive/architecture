define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/backend_service', 'packages/developer_guide_intro/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, backend_service, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__backend_service = backend_service.src__backend_service;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__backend_service$46template = Object.create(_root);
  let VoidToBackendService = () => (VoidToBackendService = dart.constFn(dart.fnType(src__backend_service.BackendService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__backend_service$46template, {
    /*src__backend_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__backend_service$46template.initReflector = function() {
    if (dart.test(src__backend_service$46template._visited)) {
      return;
    }
    src__backend_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__backend_service.BackendService), dart.fn(() => new src__backend_service.BackendService.new(), VoidToBackendService()));
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__backend_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/backend_service.template.ddc", {
    "package:developer_guide_intro/src/backend_service.template.dart": src__backend_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["backend_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,wCAAQ;YAAG;;;;;AAEb,kBAAI,wCAAQ,GAAE;AACZ;;AAEF,+CAAW;AAEX,IAAO,kCAAe,CAAC,kDAAc,EAAE,cAAM,IAAI,uCAAc;AAC/D,IAAM,kCAAa;AACnB,IAAM,gCAAa;EACrB","file":"backend_service.template.ddc.js"}');
  // Exports:
  return {
    src__backend_service$46template: src__backend_service$46template
  };
});

//# sourceMappingURL=backend_service.template.ddc.js.map
