define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/developer_guide_intro/src/hero_detail_component', 'packages/angular/src/di/reflector', 'packages/developer_guide_intro/src/hero.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, hero_detail_component, reflector, hero, angular, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__hero_detail_component = hero_detail_component.src__hero_detail_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const src__hero_detail_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfHeroDetailComponent = () => (AppViewOfHeroDetailComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_detail_component.HeroDetailComponent)))();
  let AppViewAndintToAppViewOfHeroDetailComponent = () => (AppViewAndintToAppViewOfHeroDetailComponent = dart.constFn(dart.fnType(AppViewOfHeroDetailComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroDetailComponent = () => (ComponentRefOfHeroDetailComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_detail_component.HeroDetailComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroDetailComponent = () => (ComponentFactoryOfHeroDetailComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_detail_component.HeroDetailComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_detail_component$46template, {
    /*src__hero_detail_component$46template.styles$HeroDetailComponent*/get styles$HeroDetailComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _DefaultValueAccessor_9_5 = Symbol('_DefaultValueAccessor_9_5');
  const _NgValueAccessor_9_6 = Symbol('_NgValueAccessor_9_6');
  const _NgModel_9_7 = Symbol('_NgModel_9_7');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _DefaultValueAccessor_12_5 = Symbol('_DefaultValueAccessor_12_5');
  const _NgValueAccessor_12_6 = Symbol('_NgValueAccessor_12_6');
  const _NgModel_12_7 = Symbol('_NgModel_12_7');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_input_9_1 = Symbol('_handle_input_9_1');
  const _handle_ngModelChange_9_0 = Symbol('_handle_ngModelChange_9_0');
  const _handle_input_12_1 = Symbol('_handle_input_12_1');
  const _handle_ngModelChange_12_0 = Symbol('_handle_ngModelChange_12_0');
  let const$;
  let const$0;
  let const$1;
  src__hero_detail_component$46template.ViewHeroDetailComponent0 = class ViewHeroDetailComponent0 extends src__core__linker__app_view.AppView$(src__hero_detail_component.HeroDetailComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'hr', parentRenderNode);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' Detail');
      this[_el_1][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_5 = html.Text.new('Id: ');
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_4][$append](this[_text_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_8 = html.Text.new('Name:');
      this[_el_7][$append](_text_8);
      this[_el_9] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_7]));
      this[_DefaultValueAccessor_9_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_9]);
      this[_NgValueAccessor_9_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_9_5]]);
      this[_NgModel_9_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_9_6]);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      let _text_11 = html.Text.new('Power:');
      this[_el_10][$append](_text_11);
      this[_el_12] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_10]));
      this[_DefaultValueAccessor_12_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_12]);
      this[_NgValueAccessor_12_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_12_5]]);
      this[_NgModel_12_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_12_6]);
      this[_el_9][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_9_1)));
      this[_el_9][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_9_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_9_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_9_0)));
      this[_el_12][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_12_1)));
      this[_el_12][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_12_5], 'touchHandler')));
      let subscription_1 = this[_NgModel_12_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_12_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 9 === nodeIndex) {
        return this[_DefaultValueAccessor_9_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 9 === nodeIndex) {
        return this[_NgValueAccessor_9_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 9 === nodeIndex) {
        return this[_NgModel_9_7];
      }
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 12 === nodeIndex) {
        return this[_DefaultValueAccessor_12_5];
      }
      if (token === (const$1 || (const$1 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 12 === nodeIndex) {
        return this[_NgValueAccessor_12_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 12 === nodeIndex) {
        return this[_NgModel_12_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_9_7].model = _ctx.hero.name;
      this[_NgModel_9_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_9_7].ngOnInit();
      }
      changed = false;
      this[_NgModel_12_7].model = _ctx.hero.power;
      this[_NgModel_12_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_12_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_9_0]($event) {
      this.ctx.hero.name = core.String._check($event);
    }
    [_handle_input_9_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_9_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
    [_handle_ngModelChange_12_0]($event) {
      this.ctx.hero.power = core.String._check($event);
    }
    [_handle_input_12_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_12_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__hero_detail_component$46template.ViewHeroDetailComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_text_6] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_DefaultValueAccessor_9_5] = null;
    this[_NgValueAccessor_9_6] = null;
    this[_NgModel_9_7] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_DefaultValueAccessor_12_5] = null;
    this[_NgValueAccessor_12_6] = null;
    this[_NgModel_12_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__hero_detail_component$46template.ViewHeroDetailComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-detail'));
    let t = src__hero_detail_component$46template.ViewHeroDetailComponent0._renderType;
    t == null ? src__hero_detail_component$46template.ViewHeroDetailComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_detail_component$46template.styles$HeroDetailComponent) : t;
    this.setupComponentType(src__hero_detail_component$46template.ViewHeroDetailComponent0._renderType);
  }).prototype = src__hero_detail_component$46template.ViewHeroDetailComponent0.prototype;
  dart.addTypeTests(src__hero_detail_component$46template.ViewHeroDetailComponent0);
  dart.setMethodSignature(src__hero_detail_component$46template.ViewHeroDetailComponent0, () => ({
    __proto__: dart.getMethods(src__hero_detail_component$46template.ViewHeroDetailComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_detail_component.HeroDetailComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_9_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_9_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_12_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_12_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_detail_component$46template.ViewHeroDetailComponent0, () => ({
    __proto__: dart.getFields(src__hero_detail_component$46template.ViewHeroDetailComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.DivElement),
    [_text_6]: dart.fieldType(html.Text),
    [_el_7]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_9_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_9_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_9_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_12]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_12_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_12_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_12_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_detail_component$46template.ViewHeroDetailComponent0, {
    /*src__hero_detail_component$46template.ViewHeroDetailComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_detail_component$46template.viewFactory_HeroDetailComponent0 = function(parentView, parentIndex) {
    return new src__hero_detail_component$46template.ViewHeroDetailComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_detail_component$46template.viewFactory_HeroDetailComponent0, AppViewAndintToAppViewOfHeroDetailComponent());
  dart.defineLazy(src__hero_detail_component$46template, {
    /*src__hero_detail_component$46template.styles$HeroDetailComponentHost*/get styles$HeroDetailComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroDetailComponent_0_5 = Symbol('_HeroDetailComponent_0_5');
  src__hero_detail_component$46template._ViewHeroDetailComponentHost0 = class _ViewHeroDetailComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_detail_component$46template.ViewHeroDetailComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroDetailComponent_0_5] = new src__hero_detail_component.HeroDetailComponent.new();
      this[_compView_0].create(this[_HeroDetailComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroDetailComponent()).new(0, this, this.rootEl, this[_HeroDetailComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_detail_component$46template._ViewHeroDetailComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroDetailComponent_0_5] = null;
    src__hero_detail_component$46template._ViewHeroDetailComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_detail_component$46template._ViewHeroDetailComponentHost0.prototype;
  dart.addTypeTests(src__hero_detail_component$46template._ViewHeroDetailComponentHost0);
  dart.setMethodSignature(src__hero_detail_component$46template._ViewHeroDetailComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_detail_component$46template._ViewHeroDetailComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_detail_component$46template._ViewHeroDetailComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_detail_component$46template._ViewHeroDetailComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_detail_component$46template.ViewHeroDetailComponent0),
    [_HeroDetailComponent_0_5]: dart.fieldType(src__hero_detail_component.HeroDetailComponent)
  }));
  src__hero_detail_component$46template.viewFactory_HeroDetailComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_detail_component$46template._ViewHeroDetailComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_detail_component$46template.viewFactory_HeroDetailComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_detail_component$46template, {
    /*src__hero_detail_component$46template.HeroDetailComponentNgFactory*/get HeroDetailComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroDetailComponent()).new('hero-detail', src__hero_detail_component$46template.viewFactory_HeroDetailComponentHost0, src__hero_detail_component$46template._HeroDetailComponentMetadata));
    },
    /*src__hero_detail_component$46template._HeroDetailComponentMetadata*/get _HeroDetailComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_detail_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_detail_component$46template.initReflector = function() {
    if (dart.test(src__hero_detail_component$46template._visited)) {
      return;
    }
    src__hero_detail_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_detail_component.HeroDetailComponent), src__hero_detail_component$46template.HeroDetailComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.fn(src__hero_detail_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/developer_guide_intro/src/hero_detail_component.template.ddc", {
    "package:developer_guide_intro/src/hero_detail_component.template.dart": src__hero_detail_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_detail_component.template.dart"],"names":[],"mappings":"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","file":"hero_detail_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_detail_component$46template: src__hero_detail_component$46template
  };
});

//# sourceMappingURL=hero_detail_component.template.ddc.js.map
