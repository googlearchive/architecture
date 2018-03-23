define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/developer_guide_intro/src/hero_list_component.template', 'packages/developer_guide_intro/src/logger_service', 'packages/developer_guide_intro/src/backend_service', 'packages/developer_guide_intro/src/hero_service', 'packages/developer_guide_intro/src/hero_list_component', 'packages/developer_guide_intro/src/sales_tax_component.template', 'packages/developer_guide_intro/src/tax_rate_service', 'packages/developer_guide_intro/src/sales_tax_service', 'packages/developer_guide_intro/src/sales_tax_component', 'packages/developer_guide_intro/app_component', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/developer_guide_intro/src/backend_service.template', 'packages/developer_guide_intro/src/hero_service.template', 'packages/developer_guide_intro/src/logger_service.template'], function(dart_sdk, view_type, constants, view, app_view_utils, hero_list_component, logger_service, backend_service, hero_service, hero_list_component$, sales_tax_component, tax_rate_service, sales_tax_service, sales_tax_component$, app_component, app_view, reflector, angular, backend_service$, hero_service$, logger_service$) {
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
  const src__hero_list_component$46template = hero_list_component.src__hero_list_component$46template;
  const src__logger_service = logger_service.src__logger_service;
  const src__backend_service = backend_service.src__backend_service;
  const src__hero_service = hero_service.src__hero_service;
  const src__hero_list_component = hero_list_component$.src__hero_list_component;
  const src__sales_tax_component$46template = sales_tax_component.src__sales_tax_component$46template;
  const src__tax_rate_service = tax_rate_service.src__tax_rate_service;
  const src__sales_tax_service = sales_tax_service.src__sales_tax_service;
  const src__sales_tax_component = sales_tax_component$.src__sales_tax_component;
  const app_component$ = app_component.app_component;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__backend_service$46template = backend_service$.src__backend_service$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _HeroService_0_5 = Symbol('_HeroService_0_5');
  const _HeroListComponent_0_6 = Symbol('_HeroListComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _TaxRateService_1_5 = Symbol('_TaxRateService_1_5');
  const _SalesTaxService_1_6 = Symbol('_SalesTaxService_1_6');
  const _SalesTaxComponent_1_7 = Symbol('_SalesTaxComponent_1_7');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_HeroService_0_5] = new src__hero_service.HeroService.new(src__logger_service.Logger._check(this.parentView.injectorGet(dart.wrapType(src__logger_service.Logger), this.viewData.parentIndex)), src__backend_service.BackendService._check(this.parentView.injectorGet(dart.wrapType(src__backend_service.BackendService), this.viewData.parentIndex)));
      this[_HeroListComponent_0_6] = new src__hero_list_component.HeroListComponent.new(this[_HeroService_0_5]);
      this[_compView_0].create(this[_HeroListComponent_0_6], []);
      this[_compView_1] = new src__sales_tax_component$46template.ViewSalesTaxComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this[_TaxRateService_1_5] = new src__tax_rate_service.TaxRateService.new();
      this[_SalesTaxService_1_6] = new src__sales_tax_service.SalesTaxService.new(this[_TaxRateService_1_5]);
      this[_SalesTaxComponent_1_7] = new src__sales_tax_component.SalesTaxComponent.new(this[_SalesTaxService_1_6]);
      this[_compView_1].create(this[_SalesTaxComponent_1_7], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      if (token === dart.wrapType(src__tax_rate_service.TaxRateService) && 1 === nodeIndex) {
        return this[_TaxRateService_1_5];
      }
      if (token === dart.wrapType(src__sales_tax_service.SalesTaxService) && 1 === nodeIndex) {
        return this[_SalesTaxService_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeroService_0_5] = null;
    this[_HeroListComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_TaxRateService_1_5] = null;
    this[_SalesTaxService_1_6] = null;
    this[_SalesTaxComponent_1_7] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroService_0_5]: dart.fieldType(src__hero_service.HeroService),
    [_HeroListComponent_0_6]: dart.fieldType(src__hero_list_component.HeroListComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__sales_tax_component$46template.ViewSalesTaxComponent0),
    [_TaxRateService_1_5]: dart.fieldType(src__tax_rate_service.TaxRateService),
    [_SalesTaxService_1_6]: dart.fieldType(src__sales_tax_service.SalesTaxService),
    [_SalesTaxComponent_1_7]: dart.fieldType(src__sales_tax_component.SalesTaxComponent)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __BackendService_0_6 = Symbol('__BackendService_0_6');
  const __Logger_0_7 = Symbol('__Logger_0_7');
  const __HeroService_0_8 = Symbol('__HeroService_0_8');
  const _BackendService_0_6 = Symbol('_BackendService_0_6');
  const _Logger_0_7 = Symbol('_Logger_0_7');
  const _HeroService_0_8 = Symbol('_HeroService_0_8');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    get [_BackendService_0_6]() {
      if (this[__BackendService_0_6] == null) {
        this[__BackendService_0_6] = new src__backend_service.BackendService.new();
      }
      return this[__BackendService_0_6];
    }
    get [_Logger_0_7]() {
      if (this[__Logger_0_7] == null) {
        this[__Logger_0_7] = new src__logger_service.Logger.new();
      }
      return this[__Logger_0_7];
    }
    get [_HeroService_0_8]() {
      if (this[__HeroService_0_8] == null) {
        this[__HeroService_0_8] = new src__hero_service.HeroService.new(this[_Logger_0_7], this[_BackendService_0_6]);
      }
      return this[__HeroService_0_8];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__backend_service.BackendService) && 0 === nodeIndex) {
        return this[_BackendService_0_6];
      }
      if (token === dart.wrapType(src__logger_service.Logger) && 0 === nodeIndex) {
        return this[_Logger_0_7];
      }
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__BackendService_0_6] = null;
    this[__Logger_0_7] = null;
    this[__HeroService_0_8] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_BackendService_0_6]: dart.fnType(src__backend_service.BackendService, []),
    [_Logger_0_7]: dart.fnType(src__logger_service.Logger, []),
    [_HeroService_0_8]: dart.fnType(src__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent),
    [__BackendService_0_6]: dart.fieldType(src__backend_service.BackendService),
    [__Logger_0_7]: dart.fieldType(src__logger_service.Logger),
    [__HeroService_0_8]: dart.fieldType(src__hero_service.HeroService)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__backend_service$46template.initReflector();
    src__hero_list_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    src__logger_service$46template.initReflector();
    src__sales_tax_component$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/app_component.template.ddc", {
    "package:developer_guide_intro/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
