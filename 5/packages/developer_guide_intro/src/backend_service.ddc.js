define(['dart_sdk', 'packages/developer_guide_intro/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__backend_service = Object.create(_root);
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  src__backend_service.BackendService = class BackendService extends core.Object {
    getAll(type) {
      return async.async(core.List, function* getAll() {
        return dart.equals(type, dart.wrapType(src__hero.Hero)) ? src__backend_service.BackendService._mockHeroes : dart.throw(core.Exception.new('Cannot get object of this type'));
      });
    }
  };
  (src__backend_service.BackendService.new = function() {
  }).prototype = src__backend_service.BackendService.prototype;
  dart.addTypeTests(src__backend_service.BackendService);
  dart.setMethodSignature(src__backend_service.BackendService, () => ({
    __proto__: dart.getMethods(src__backend_service.BackendService.__proto__),
    getAll: dart.fnType(async.Future$(core.List), [dart.dynamic])
  }));
  dart.defineLazy(src__backend_service.BackendService, {
    /*src__backend_service.BackendService._mockHeroes*/get _mockHeroes() {
      return JSArrayOfHero().of([new src__hero.Hero.new('Windstorm', 'Weather mastery'), new src__hero.Hero.new('Mr. Nice', 'Killing them with kindness'), new src__hero.Hero.new('Magneta', 'Manipulates metalic objects')]);
    }
  });
  dart.trackLibraries("packages/developer_guide_intro/src/backend_service.ddc", {
    "package:developer_guide_intro/src/backend_service.dart": src__backend_service
  }, '{"version":3,"sourceRoot":"","sources":["backend_service.dart"],"names":[],"mappings":";;;;;;;;;;;;WAcsB,IAAI;AAAE;2BAAS,IAAI,EAAI,6BAAI,IACzC,+CAAW,GACX,WAAM,AAAI,kBAAS,CAAC;MAAiC;;;;EAC7D;;;;;;;MATe,+CAAW;YAAG,qBACzB,IAAI,kBAAI,CAAC,aAAa,oBACtB,IAAI,kBAAI,CAAC,YAAY,+BACrB,IAAI,kBAAI,CAAC,WAAW","file":"backend_service.ddc.js"}');
  // Exports:
  return {
    src__backend_service: src__backend_service
  };
});

//# sourceMappingURL=backend_service.ddc.js.map
