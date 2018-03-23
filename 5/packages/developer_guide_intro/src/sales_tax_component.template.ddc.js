define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/pipes/number_pipe', 'packages/developer_guide_intro/src/sales_tax_component', 'packages/developer_guide_intro/src/tax_rate_service', 'packages/developer_guide_intro/src/sales_tax_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/developer_guide_intro/src/sales_tax_service.template', 'packages/developer_guide_intro/src/tax_rate_service.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_if, number_pipe, sales_tax_component, tax_rate_service, sales_tax_service, reflector, angular, sales_tax_service$, tax_rate_service$) {
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
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__pipes__number_pipe = number_pipe.src__common__pipes__number_pipe;
  const src__sales_tax_component = sales_tax_component.src__sales_tax_component;
  const src__tax_rate_service = tax_rate_service.src__tax_rate_service;
  const src__sales_tax_service = sales_tax_service.src__sales_tax_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__sales_tax_service$46template = sales_tax_service$.src__sales_tax_service$46template;
  const src__tax_rate_service$46template = tax_rate_service$.src__tax_rate_service$46template;
  const _root = Object.create(null);
  const src__sales_tax_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfSalesTaxComponent = () => (AppViewOfSalesTaxComponent = dart.constFn(src__core__linker__app_view.AppView$(src__sales_tax_component.SalesTaxComponent)))();
  let AppViewAndintToAppViewOfSalesTaxComponent = () => (AppViewAndintToAppViewOfSalesTaxComponent = dart.constFn(dart.fnType(AppViewOfSalesTaxComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let dynamicAndStringAndbool__ToString = () => (dynamicAndStringAndbool__ToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.String, core.bool, core.String])))();
  let ComponentRefOfSalesTaxComponent = () => (ComponentRefOfSalesTaxComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__sales_tax_component.SalesTaxComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSalesTaxComponent = () => (ComponentFactoryOfSalesTaxComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__sales_tax_component.SalesTaxComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__sales_tax_component$46template, {
    /*src__sales_tax_component$46template.styles$SalesTaxComponent*/get styles$SalesTaxComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_3 = Symbol('_el_3');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _pipe_currency_0 = Symbol('_pipe_currency_0');
  const _handle_change_3_0 = Symbol('_handle_change_3_0');
  let const$;
  src__sales_tax_component$46template.ViewSalesTaxComponent0 = class ViewSalesTaxComponent0 extends src__core__linker__app_view.AppView$(src__sales_tax_component.SalesTaxComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Sales Tax Calculator');
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new('Amount:');
      parentRenderNode[$append](_text_2);
      this[_el_3] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', parentRenderNode));
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], src__sales_tax_component$46template.viewFactory_SalesTaxComponent1);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_el_3][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_3_0)));
      this[_pipe_currency_0] = new src__common__pipes__number_pipe.CurrencyPipe.new();
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let local_amountBox = this[_el_3];
      this[_NgIf_4_9].ngIf = local_amountBox.value !== '';
      this[_appEl_4].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_change_3_0]($event) {
      0;
    }
  };
  (src__sales_tax_component$46template.ViewSalesTaxComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_pipe_currency_0] = null;
    src__sales_tax_component$46template.ViewSalesTaxComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('sales-tax'));
    let t = src__sales_tax_component$46template.ViewSalesTaxComponent0._renderType;
    t == null ? src__sales_tax_component$46template.ViewSalesTaxComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__sales_tax_component$46template.styles$SalesTaxComponent) : t;
    this.setupComponentType(src__sales_tax_component$46template.ViewSalesTaxComponent0._renderType);
  }).prototype = src__sales_tax_component$46template.ViewSalesTaxComponent0.prototype;
  dart.addTypeTests(src__sales_tax_component$46template.ViewSalesTaxComponent0);
  dart.setMethodSignature(src__sales_tax_component$46template.ViewSalesTaxComponent0, () => ({
    __proto__: dart.getMethods(src__sales_tax_component$46template.ViewSalesTaxComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__sales_tax_component.SalesTaxComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_change_3_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__sales_tax_component$46template.ViewSalesTaxComponent0, () => ({
    __proto__: dart.getFields(src__sales_tax_component$46template.ViewSalesTaxComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.InputElement),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_pipe_currency_0]: dart.fieldType(src__common__pipes__number_pipe.CurrencyPipe)
  }));
  dart.defineLazy(src__sales_tax_component$46template.ViewSalesTaxComponent0, {
    /*src__sales_tax_component$46template.ViewSalesTaxComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__sales_tax_component$46template.viewFactory_SalesTaxComponent0 = function(parentView, parentIndex) {
    return new src__sales_tax_component$46template.ViewSalesTaxComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__sales_tax_component$46template.viewFactory_SalesTaxComponent0, AppViewAndintToAppViewOfSalesTaxComponent());
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_currency_0_0 = Symbol('_pipe_currency_0_0');
  src__sales_tax_component$46template._ViewSalesTaxComponent1 = class _ViewSalesTaxComponent1 extends src__core__linker__app_view.AppView$(src__sales_tax_component.SalesTaxComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      let _text_1 = html.Text.new('\n      The sales tax is  \n       ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this[_pipe_currency_0_0] = src__core__linker__app_view_utils.pureProxy4(core.String, dart.dynamic, core.String, core.bool, core.String, dart.bind(src__sales_tax_component$46template.ViewSalesTaxComponent0.as(this.parentView)[_pipe_currency_0], 'transform'));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_amountBox = src__sales_tax_component$46template.ViewSalesTaxComponent0.as(this.parentView)[_el_3];
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dcall(this[_pipe_currency_0_0], _ctx.getTax(local_amountBox.value), 'USD', true, '1.2-2'));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__sales_tax_component$46template._ViewSalesTaxComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_pipe_currency_0_0] = null;
    src__sales_tax_component$46template._ViewSalesTaxComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__sales_tax_component$46template.ViewSalesTaxComponent0._renderType;
  }).prototype = src__sales_tax_component$46template._ViewSalesTaxComponent1.prototype;
  dart.addTypeTests(src__sales_tax_component$46template._ViewSalesTaxComponent1);
  dart.setMethodSignature(src__sales_tax_component$46template._ViewSalesTaxComponent1, () => ({
    __proto__: dart.getMethods(src__sales_tax_component$46template._ViewSalesTaxComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__sales_tax_component.SalesTaxComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__sales_tax_component$46template._ViewSalesTaxComponent1, () => ({
    __proto__: dart.getFields(src__sales_tax_component$46template._ViewSalesTaxComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_currency_0_0]: dart.fieldType(dynamicAndStringAndbool__ToString())
  }));
  src__sales_tax_component$46template.viewFactory_SalesTaxComponent1 = function(parentView, parentIndex) {
    return new src__sales_tax_component$46template._ViewSalesTaxComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__sales_tax_component$46template.viewFactory_SalesTaxComponent1, AppViewAndintToAppViewOfSalesTaxComponent());
  dart.defineLazy(src__sales_tax_component$46template, {
    /*src__sales_tax_component$46template.styles$SalesTaxComponentHost*/get styles$SalesTaxComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _TaxRateService_0_5 = Symbol('_TaxRateService_0_5');
  const _SalesTaxService_0_6 = Symbol('_SalesTaxService_0_6');
  const _SalesTaxComponent_0_7 = Symbol('_SalesTaxComponent_0_7');
  src__sales_tax_component$46template._ViewSalesTaxComponentHost0 = class _ViewSalesTaxComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__sales_tax_component$46template.ViewSalesTaxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TaxRateService_0_5] = new src__tax_rate_service.TaxRateService.new();
      this[_SalesTaxService_0_6] = new src__sales_tax_service.SalesTaxService.new(this[_TaxRateService_0_5]);
      this[_SalesTaxComponent_0_7] = new src__sales_tax_component.SalesTaxComponent.new(this[_SalesTaxService_0_6]);
      this[_compView_0].create(this[_SalesTaxComponent_0_7], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSalesTaxComponent()).new(0, this, this.rootEl, this[_SalesTaxComponent_0_7]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__tax_rate_service.TaxRateService) && 0 === nodeIndex) {
        return this[_TaxRateService_0_5];
      }
      if (token === dart.wrapType(src__sales_tax_service.SalesTaxService) && 0 === nodeIndex) {
        return this[_SalesTaxService_0_6];
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
  (src__sales_tax_component$46template._ViewSalesTaxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TaxRateService_0_5] = null;
    this[_SalesTaxService_0_6] = null;
    this[_SalesTaxComponent_0_7] = null;
    src__sales_tax_component$46template._ViewSalesTaxComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__sales_tax_component$46template._ViewSalesTaxComponentHost0.prototype;
  dart.addTypeTests(src__sales_tax_component$46template._ViewSalesTaxComponentHost0);
  dart.setMethodSignature(src__sales_tax_component$46template._ViewSalesTaxComponentHost0, () => ({
    __proto__: dart.getMethods(src__sales_tax_component$46template._ViewSalesTaxComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__sales_tax_component$46template._ViewSalesTaxComponentHost0, () => ({
    __proto__: dart.getFields(src__sales_tax_component$46template._ViewSalesTaxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__sales_tax_component$46template.ViewSalesTaxComponent0),
    [_TaxRateService_0_5]: dart.fieldType(src__tax_rate_service.TaxRateService),
    [_SalesTaxService_0_6]: dart.fieldType(src__sales_tax_service.SalesTaxService),
    [_SalesTaxComponent_0_7]: dart.fieldType(src__sales_tax_component.SalesTaxComponent)
  }));
  src__sales_tax_component$46template.viewFactory_SalesTaxComponentHost0 = function(parentView, parentIndex) {
    return new src__sales_tax_component$46template._ViewSalesTaxComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__sales_tax_component$46template.viewFactory_SalesTaxComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__sales_tax_component$46template, {
    /*src__sales_tax_component$46template.SalesTaxComponentNgFactory*/get SalesTaxComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSalesTaxComponent()).new('sales-tax', src__sales_tax_component$46template.viewFactory_SalesTaxComponentHost0, src__sales_tax_component$46template._SalesTaxComponentMetadata));
    },
    /*src__sales_tax_component$46template._SalesTaxComponentMetadata*/get _SalesTaxComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__sales_tax_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__sales_tax_component$46template.initReflector = function() {
    if (dart.test(src__sales_tax_component$46template._visited)) {
      return;
    }
    src__sales_tax_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__sales_tax_component.SalesTaxComponent), src__sales_tax_component$46template.SalesTaxComponentNgFactory);
    angular$46template.initReflector();
    src__sales_tax_service$46template.initReflector();
    src__tax_rate_service$46template.initReflector();
  };
  dart.fn(src__sales_tax_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/sales_tax_component.template.ddc", {
    "package:developer_guide_intro/src/sales_tax_component.template.dart": src__sales_tax_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["sales_tax_component.template.dart"],"names":[],"mappings":"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","file":"sales_tax_component.template.ddc.js"}');
  // Exports:
  return {
    src__sales_tax_component$46template: src__sales_tax_component$46template
  };
});

//# sourceMappingURL=sales_tax_component.template.ddc.js.map
