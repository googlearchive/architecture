define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/sales_tax_service', 'packages/developer_guide_intro/src/tax_rate_service', 'packages/angular/angular.template', 'packages/developer_guide_intro/src/tax_rate_service.template'], function(dart_sdk, reflector, sales_tax_service, tax_rate_service, angular, tax_rate_service$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__sales_tax_service = sales_tax_service.src__sales_tax_service;
  const src__tax_rate_service = tax_rate_service.src__tax_rate_service;
  const angular$46template = angular.angular$46template;
  const src__tax_rate_service$46template = tax_rate_service$.src__tax_rate_service$46template;
  const _root = Object.create(null);
  const src__sales_tax_service$46template = Object.create(_root);
  let TaxRateServiceToSalesTaxService = () => (TaxRateServiceToSalesTaxService = dart.constFn(dart.fnType(src__sales_tax_service.SalesTaxService, [src__tax_rate_service.TaxRateService])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__sales_tax_service$46template, {
    /*src__sales_tax_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__sales_tax_service$46template.initReflector = function() {
    if (dart.test(src__sales_tax_service$46template._visited)) {
      return;
    }
    src__sales_tax_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__sales_tax_service.SalesTaxService), dart.fn(p0 => new src__sales_tax_service.SalesTaxService.new(p0), TaxRateServiceToSalesTaxService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__sales_tax_service.SalesTaxService), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__tax_rate_service.TaxRateService)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__tax_rate_service$46template.initReflector();
  };
  dart.fn(src__sales_tax_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/sales_tax_service.template.ddc", {
    "package:developer_guide_intro/src/sales_tax_service.template.dart": src__sales_tax_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["sales_tax_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAcI,0CAAQ;YAAG;;;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAO,kCAAe,CAAC,qDAAe,EAAE,QAAC,EAAqB,IAAK,IAAI,0CAAe,CAAC,EAAE;AACzF,IAAO,uCAAoB,CAAC,qDAAe,EAAE,sCAC3C,oCAAW,mDAAc;AAE3B,IAAM,gCAAa;AACnB,IAAM,8CAAa;EACrB","file":"sales_tax_service.template.ddc.js"}');
  // Exports:
  return {
    src__sales_tax_service$46template: src__sales_tax_service$46template
  };
});

//# sourceMappingURL=sales_tax_service.template.ddc.js.map
