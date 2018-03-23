define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__tax_rate_service = Object.create(_root);
  src__tax_rate_service.TaxRateService = class TaxRateService extends core.Object {
    getRate(rateName) {
      return 0.1;
    }
  };
  (src__tax_rate_service.TaxRateService.new = function() {
  }).prototype = src__tax_rate_service.TaxRateService.prototype;
  dart.addTypeTests(src__tax_rate_service.TaxRateService);
  dart.setMethodSignature(src__tax_rate_service.TaxRateService, () => ({
    __proto__: dart.getMethods(src__tax_rate_service.TaxRateService.__proto__),
    getRate: dart.fnType(core.num, [core.String])
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/tax_rate_service.ddc", {
    "package:developer_guide_intro/src/tax_rate_service.dart": src__tax_rate_service
  }, '{"version":3,"sourceRoot":"","sources":["tax_rate_service.dart"],"names":[],"mappings":";;;;;;;;YAIc,QAAe;YAAK;IAAI;;;EACtC","file":"tax_rate_service.ddc.js"}');
  // Exports:
  return {
    src__tax_rate_service: src__tax_rate_service
  };
});

//# sourceMappingURL=tax_rate_service.ddc.js.map
