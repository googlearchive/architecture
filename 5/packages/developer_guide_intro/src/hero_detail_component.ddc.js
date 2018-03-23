define(['dart_sdk', 'packages/developer_guide_intro/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_detail_component = Object.create(_root);
  src__hero_detail_component.HeroDetailComponent = class HeroDetailComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_detail_component.HeroDetailComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_detail_component.HeroDetailComponent.prototype;
  dart.addTypeTests(src__hero_detail_component.HeroDetailComponent);
  const hero$ = Symbol("HeroDetailComponent.hero");
  dart.setFieldSignature(src__hero_detail_component.HeroDetailComponent, () => ({
    __proto__: dart.getFields(src__hero_detail_component.HeroDetailComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/hero_detail_component.ddc", {
    "package:developer_guide_intro/src/hero_detail_component.dart": src__hero_detail_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_detail_component.dart"],"names":[],"mappings":";;;;;;;;;IAYO;;;;;;;;eAAI;EACX","file":"hero_detail_component.ddc.js"}');
  // Exports:
  return {
    src__hero_detail_component: src__hero_detail_component
  };
});

//# sourceMappingURL=hero_detail_component.ddc.js.map
