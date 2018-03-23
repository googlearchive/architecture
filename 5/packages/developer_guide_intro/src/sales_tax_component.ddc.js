define(['dart_sdk', 'packages/developer_guide_intro/src/sales_tax_service'], function(dart_sdk, sales_tax_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__sales_tax_service = sales_tax_service.src__sales_tax_service;
  const _root = Object.create(null);
  const src__sales_tax_component = Object.create(_root);
  const _salesTaxService = Symbol('_salesTaxService');
  src__sales_tax_component.SalesTaxComponent = class SalesTaxComponent extends core.Object {
    getTax(value) {
      return this[_salesTaxService].getVAT(value);
    }
  };
  (src__sales_tax_component.SalesTaxComponent.new = function(salesTaxService) {
    this[_salesTaxService] = salesTaxService;
  }).prototype = src__sales_tax_component.SalesTaxComponent.prototype;
  dart.addTypeTests(src__sales_tax_component.SalesTaxComponent);
  dart.setMethodSignature(src__sales_tax_component.SalesTaxComponent, () => ({
    __proto__: dart.getMethods(src__sales_tax_component.SalesTaxComponent.__proto__),
    getTax: dart.fnType(core.num, [dart.dynamic])
  }));
  dart.setFieldSignature(src__sales_tax_component.SalesTaxComponent, () => ({
    __proto__: dart.getFields(src__sales_tax_component.SalesTaxComponent.__proto__),
    [_salesTaxService]: dart.fieldType(src__sales_tax_service.SalesTaxService)
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/sales_tax_component.ddc", {
    "package:developer_guide_intro/src/sales_tax_component.dart": src__sales_tax_component
  }, '{"version":3,"sourceRoot":"","sources":["sales_tax_component.dart"],"names":[],"mappings":";;;;;;;;;;WAwBa,KAAgC;YACvC,uBAAqB,OAAO,CAAC,KAAK;IAAC;;6DAHhB,eAAgB;IAAhB,sBAAgB,GAAhB,eAAgB;EAAG","file":"sales_tax_component.ddc.js"}');
  // Exports:
  return {
    src__sales_tax_component: src__sales_tax_component
  };
});

//# sourceMappingURL=sales_tax_component.ddc.js.map
