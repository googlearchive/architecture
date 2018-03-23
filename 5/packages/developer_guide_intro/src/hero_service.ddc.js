define(['dart_sdk', 'packages/developer_guide_intro/src/hero', 'packages/developer_guide_intro/src/backend_service', 'packages/developer_guide_intro/src/logger_service'], function(dart_sdk, hero, backend_service, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__backend_service = backend_service.src__backend_service;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__hero_service = Object.create(_root);
  const $length = dartx.length;
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  const _logger = Symbol('_logger');
  const _backendService = Symbol('_backendService');
  src__hero_service.HeroService = class HeroService extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    getAll() {
      return async.async(ListOfHero(), (function* getAll() {
        this.heroes = ListOfHero()._check(yield this[_backendService].getAll(dart.wrapType(src__hero.Hero)));
        this[_logger].log(dart.str`Fetched ${this.heroes[$length]} heroes.`);
        return this.heroes;
      }).bind(this));
    }
  };
  (src__hero_service.HeroService.new = function(logger, backendService) {
    this[heroes] = null;
    this[_logger] = logger;
    this[_backendService] = backendService;
  }).prototype = src__hero_service.HeroService.prototype;
  dart.addTypeTests(src__hero_service.HeroService);
  const heroes = Symbol("HeroService.heroes");
  dart.setMethodSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__hero.Hero)), [])
  }));
  dart.setFieldSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getFields(src__hero_service.HeroService.__proto__),
    [_backendService]: dart.finalFieldType(src__backend_service.BackendService),
    [_logger]: dart.finalFieldType(src__logger_service.Logger),
    heroes: dart.fieldType(ListOfHero())
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/hero_service.ddc", {
    "package:developer_guide_intro/src/hero_service.dart": src__hero_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAYa;;;;;;;AAIiB;AAC1B,mBAAM,uBAAG,MAAM,qBAAe,OAAO,CAAC,6BAAI;AAC1C,qBAAO,IAAI,CAAC,mBAAW,WAAM,SAAO;AACpC,cAAO,YAAM;MACf;;;gDANiB,MAAO,EAAO,cAAe;IAFnC,YAAM;IAEA,aAAO,GAAP,MAAO;IAAO,qBAAe,GAAf,cAAe;EAAC","file":"hero_service.ddc.js"}');
  // Exports:
  return {
    src__hero_service: src__hero_service
  };
});

//# sourceMappingURL=hero_service.ddc.js.map
