define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/developer_guide_intro/src/hero', 'packages/developer_guide_intro/src/hero_service'], function(dart_sdk, lifecycle_hooks, hero, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const _root = Object.create(null);
  const src__hero_list_component = Object.create(_root);
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  src__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selectedHero() {
      return this[selectedHero];
    }
    set selectedHero(value) {
      this[selectedHero] = value;
    }
    ngOnInit() {
      return async.async(dart.dynamic, (function* ngOnInit() {
        this.heroes = (yield this[_heroService].getAll());
      }).bind(this));
    }
    selectHero(hero) {
      this.selectedHero = hero;
    }
  };
  (src__hero_list_component.HeroListComponent.new = function(heroService) {
    this[heroes] = null;
    this[selectedHero] = null;
    this[_heroService] = heroService;
  }).prototype = src__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__hero_list_component.HeroListComponent);
  const heroes = Symbol("HeroListComponent.heroes");
  const selectedHero = Symbol("HeroListComponent.selectedHero");
  src__hero_list_component.HeroListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getMethods(src__hero_list_component.HeroListComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    selectHero: dart.fnType(dart.void, [src__hero.Hero])
  }));
  dart.setFieldSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__hero_list_component.HeroListComponent.__proto__),
    heroes: dart.fieldType(ListOfHero()),
    selectedHero: dart.fieldType(src__hero.Hero),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService)
  }));
  dart.trackLibraries("packages/developer_guide_intro/src/hero_list_component.ddc", {
    "package:developer_guide_intro/src/hero_list_component.dart": src__hero_list_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAca;;;;;;IACN;;;;;;;AAKW;AACd,mBAAM,IAAG,MAAM,kBAAY,OAAO;MACpC;;eAEgB,IAAS;AACvB,uBAAY,GAAG,IAAI;IACrB;;6DARuB,WAAY;IAJxB,YAAM;IACZ,kBAAY;IAGM,kBAAY,GAAZ,WAAY;EAAC","file":"hero_list_component.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component: src__hero_list_component
  };
});

//# sourceMappingURL=hero_list_component.ddc.js.map
