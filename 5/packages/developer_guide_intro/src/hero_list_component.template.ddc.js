define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/developer_guide_intro/src/hero_list_component', 'packages/developer_guide_intro/src/hero', 'packages/developer_guide_intro/src/hero_detail_component.template', 'packages/developer_guide_intro/src/hero_detail_component', 'packages/developer_guide_intro/src/logger_service', 'packages/developer_guide_intro/src/backend_service', 'packages/developer_guide_intro/src/hero_service', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/hero.template', 'packages/developer_guide_intro/src/hero_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, hero_list_component, hero, hero_detail_component, hero_detail_component$, logger_service, backend_service, hero_service, reflector, hero$, hero_service$, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__hero_list_component = hero_list_component.src__hero_list_component;
  const src__hero = hero.src__hero;
  const src__hero_detail_component$46template = hero_detail_component.src__hero_detail_component$46template;
  const src__hero_detail_component = hero_detail_component$.src__hero_detail_component;
  const src__logger_service = logger_service.src__logger_service;
  const src__backend_service = backend_service.src__backend_service;
  const src__hero_service = hero_service.src__hero_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero$.src__hero$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgFor_6_9 = Symbol('_NgFor_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Hero List');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'i', this[_el_2]);
      let _text_4 = html.Text.new('Pick a hero from the list');
      this[_el_3][$append](_text_4);
      this[_el_5] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_5][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], src__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__hero_list_component$46template.viewFactory_HeroListComponent2);
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_6_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_6_9].ngDoCheck();
      this[_NgIf_7_9].ngIf = _ctx.selectedHero != null;
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_7];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0] = null;
    src__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-list'));
    let t = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.UListElement),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _text_1 = Symbol('_text_1');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.selectHero(local_hero);
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  const _compView_0 = Symbol('_compView_0');
  const _HeroDetailComponent_0_5 = Symbol('_HeroDetailComponent_0_5');
  src__hero_list_component$46template._ViewHeroListComponent2 = class _ViewHeroListComponent2 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      this[_compView_0] = new src__hero_detail_component$46template.ViewHeroDetailComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this[_HeroDetailComponent_0_5] = new src__hero_detail_component.HeroDetailComponent.new();
      this[_compView_0].create(this[_HeroDetailComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.selectedHero;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_HeroDetailComponent_0_5].hero = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeroDetailComponent_0_5] = null;
    this[_expr_0] = null;
    src__hero_list_component$46template._ViewHeroListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent2.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent2);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__hero_detail_component$46template.ViewHeroDetailComponent0),
    [_HeroDetailComponent_0_5]: dart.fieldType(src__hero_detail_component.HeroDetailComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent2 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent2, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _HeroService_0_5 = Symbol('_HeroService_0_5');
  const _HeroListComponent_0_6 = Symbol('_HeroListComponent_0_6');
  src__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroService_0_5] = new src__hero_service.HeroService.new(src__logger_service.Logger._check(this.injectorGet(dart.wrapType(src__logger_service.Logger), this.viewData.parentIndex)), src__backend_service.BackendService._check(this.injectorGet(dart.wrapType(src__backend_service.BackendService), this.viewData.parentIndex)));
      this[_HeroListComponent_0_6] = new src__hero_list_component.HeroListComponent.new(this[_HeroService_0_5]);
      this[_compView_0].create(this[_HeroListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroService_0_5] = null;
    this[_HeroListComponent_0_6] = null;
    src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroService_0_5]: dart.fieldType(src__hero_service.HeroService),
    [_HeroListComponent_0_6]: dart.fieldType(src__hero_list_component.HeroListComponent)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('hero-list', src__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero_list_component$46template._visited)) {
      return;
    }
    src__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_list_component.HeroListComponent), src__hero_list_component$46template.HeroListComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_detail_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/hero_list_component.template.ddc", {
    "package:developer_guide_intro/src/hero_list_component.template.dart": src__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component$46template: src__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
