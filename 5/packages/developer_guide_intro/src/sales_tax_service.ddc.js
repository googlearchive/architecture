define(['dart_sdk', 'packages/developer_guide_intro/src/tax_rate_service'], function(dart_sdk, tax_rate_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__tax_rate_service = tax_rate_service.src__tax_rate_service;
  const _root = Object.create(null);
  const src__sales_tax_service = Object.create(_root);
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  src__sales_tax_service.SalesTaxService = class SalesTaxService extends core.Object {
    get rateService() {
      return this[rateService$];
    }
    set rateService(value) {
      this[rateService$] = value;
    }
    getVAT(value) {
      return dart.notNull(this.rateService.getRate('VAT')) * dart.notNull(typeof value == 'number' ? value : core.num.parse(core.String._check(value), dart.fn(_ => 0, StringToint())));
    }
  };
  (src__sales_tax_service.SalesTaxService.new = function(rateService) {
    this[rateService$] = rateService;
  }).prototype = src__sales_tax_service.SalesTaxService.prototype;
  dart.addTypeTests(src__sales_tax_service.SalesTaxService);
  const rateService$ = Symbol("SalesTaxService.rateService");
  dart.setMethodSignature(src__sales_tax_service.SalesTaxService, () => ({
    __proto__: dart.getMethods(src__sales_tax_service.SalesTaxService.__proto__),
    getVAT: dart.fnType(core.num, [dart.dynamic])
  }));
  dart.setFieldSignature(src__sales_tax_service.SalesTaxService, () => ({
    __proto__: dart.getFields(src__sales_tax_service.SalesTaxService.__proto__),
    rateService: dart.fieldType(src__tax_rate_service.TaxRateService)
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/sales_tax_service.ddc", {
    "package:developer_guide_intro/src/sales_tax_service.dart": src__sales_tax_service
  }, '{"version":3,"sourceRoot":"","sources":["sales_tax_service.dart"],"names":[],"mappings":";;;;;;;;;;IAMiB;;;;;;WAIJ,KAAgC;YACZ,cAA3B,gBAAW,QAAQ,CAAC,8BACnB,KAAK,eAAU,KAAK,GAAG,QAAG,MAAM,oBAAC,KAAK,GAAE,QAAC,CAAC,IAAK;IAAG;;yDAJvC,WAAgB;IAAX,kBAAW,GAAX,WAAW;EAAC","file":"sales_tax_service.ddc.js"}');
  // Exports:
  return {
    src__sales_tax_service: src__sales_tax_service
  };
});

//# sourceMappingURL=sales_tax_service.ddc.js.map
