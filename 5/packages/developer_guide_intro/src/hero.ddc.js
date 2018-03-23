define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get power() {
      return this[power$];
    }
    set power(value) {
      this[power$] = value;
    }
  };
  (src__hero.Hero.new = function(name, power) {
    if (power === void 0) power = '';
    this[name$] = name;
    this[power$] = power;
    let x = src__hero.Hero._nextId;
    src__hero.Hero._nextId = dart.notNull(x) + 1;
    this[id] = x;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  const power$ = Symbol("Hero.power");
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String),
    power: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__hero.Hero, {
    /*src__hero.Hero._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  dart.trackLibraries("packages/developer_guide_intro/src/hero.ddc", {
    "package:developer_guide_intro/src/hero.dart": src__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;IAEY;;;;;;IACH;;;;;;IAAM;;;;;;;iCAER,IAAS,EAAG,KAAe;0BAAV,QAAQ;IAApB,WAAI,GAAJ,IAAI;IAAQ,YAAK,GAAL,KAAK;YAAe,sBAAO;IAAP,sBAAO,qBALnD;IAKuC,QAAE;EAAY;;;;;;;;;;;;MAJxC,sBAAO;YAAG","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
