define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/tax_rate_service', 'packages/angular/angular.template'], function(dart_sdk, reflector, tax_rate_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__tax_rate_service = tax_rate_service.src__tax_rate_service;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__tax_rate_service$46template = Object.create(_root);
  let VoidToTaxRateService = () => (VoidToTaxRateService = dart.constFn(dart.fnType(src__tax_rate_service.TaxRateService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__tax_rate_service$46template, {
    /*src__tax_rate_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__tax_rate_service$46template.initReflector = function() {
    if (dart.test(src__tax_rate_service$46template._visited)) {
      return;
    }
    src__tax_rate_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__tax_rate_service.TaxRateService), dart.fn(() => new src__tax_rate_service.TaxRateService.new(), VoidToTaxRateService()));
    angular$46template.initReflector();
  };
  dart.fn(src__tax_rate_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/tax_rate_service.template.ddc", {
    "package:developer_guide_intro/src/tax_rate_service.template.dart": src__tax_rate_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["tax_rate_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAWI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAO,kCAAe,CAAC,mDAAc,EAAE,cAAM,IAAI,wCAAc;AAC/D,IAAM,gCAAa;EACrB","file":"tax_rate_service.template.ddc.js"}');
  // Exports:
  return {
    src__tax_rate_service$46template: src__tax_rate_service$46template
  };
});

//# sourceMappingURL=tax_rate_service.template.ddc.js.map
