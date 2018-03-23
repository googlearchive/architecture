define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/hero_service', 'packages/developer_guide_intro/src/logger_service', 'packages/developer_guide_intro/src/backend_service', 'packages/developer_guide_intro/src/backend_service.template', 'packages/developer_guide_intro/src/hero.template', 'packages/developer_guide_intro/src/logger_service.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, logger_service, backend_service, backend_service$, hero, logger_service$, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero_service = hero_service.src__hero_service;
  const src__logger_service = logger_service.src__logger_service;
  const src__backend_service = backend_service.src__backend_service;
  const src__backend_service$46template = backend_service$.src__backend_service$46template;
  const src__hero$46template = hero.src__hero$46template;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_service$46template = Object.create(_root);
  let LoggerAndBackendServiceToHeroService = () => (LoggerAndBackendServiceToHeroService = dart.constFn(dart.fnType(src__hero_service.HeroService, [src__logger_service.Logger, src__backend_service.BackendService])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_service$46template, {
    /*src__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  src__hero_service$46template.initReflector = function() {
    if (dart.test(src__hero_service$46template._visited)) {
      return;
    }
    src__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__hero_service.HeroService), dart.fn((p0, p1) => new src__hero_service.HeroService.new(p0, p1), LoggerAndBackendServiceToHeroService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__hero_service.HeroService), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__logger_service.Logger)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(src__backend_service.BackendService)], core.Object))], ListOfObject())));
    src__backend_service$46template.initReflector();
    src__hero$46template.initReflector();
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/hero_service.template.ddc", {
    "package:developer_guide_intro/src/hero_service.template.dart": src__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAoBI,qCAAQ;YAAG;;;;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,kCAAe,CAAC,4CAAW,EAAE,SAAC,EAAa,EAAE,EAAqB,KAAK,IAAI,iCAAW,CAAC,EAAE,EAAE,EAAE;AACpG,IAAO,uCAAoB,CAAC,4CAAW,EAAE,sCACvC,oCAAW,yCAAM,kBACjB,sCAAW,kDAAc;AAE3B,IAAM,6CAAa;AACnB,IAAM,kCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__hero_service$46template: src__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
