// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_detail_component.dart';
export 'hero_detail_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_detail_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import3;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import4;
import 'package:angular_forms/src/directives/ng_model.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import11;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/ng_control.dart' as import13;

const List<dynamic> styles$HeroDetailComponent = const [];

class ViewHeroDetailComponent0 extends AppView<import1.HeroDetailComponent> {
  import2.Element _el_0;
  import2.Element _el_1;
  import2.Text _text_2;
  import2.DivElement _el_4;
  import2.Text _text_6;
  import2.DivElement _el_7;
  import2.InputElement _el_9;
  import3.DefaultValueAccessor _DefaultValueAccessor_9_5;
  List<import4.ControlValueAccessor<dynamic>> _NgValueAccessor_9_6;
  import5.NgModel _NgModel_9_7;
  import2.DivElement _el_10;
  import2.InputElement _el_12;
  import3.DefaultValueAccessor _DefaultValueAccessor_12_5;
  List<import4.ControlValueAccessor<dynamic>> _NgValueAccessor_12_6;
  import5.NgModel _NgModel_12_7;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewHeroDetailComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-detail');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroDetailComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroDetailComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_1 = createAndAppend(doc, 'h4', parentRenderNode);
    _text_2 = new import2.Text('');
    _el_1.append(_text_2);
    import2.Text _text_3 = new import2.Text(' Detail');
    _el_1.append(_text_3);
    _el_4 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_5 = new import2.Text('Id: ');
    _el_4.append(_text_5);
    _text_6 = new import2.Text('');
    _el_4.append(_text_6);
    _el_7 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_8 = new import2.Text('Name:');
    _el_7.append(_text_8);
    _el_9 = createAndAppend(doc, 'input', _el_7);
    _DefaultValueAccessor_9_5 = new import3.DefaultValueAccessor(_el_9);
    _NgValueAccessor_9_6 = [_DefaultValueAccessor_9_5];
    _NgModel_9_7 = new import5.NgModel(null, _NgValueAccessor_9_6);
    _el_10 = createDivAndAppend(doc, parentRenderNode);
    import2.Text _text_11 = new import2.Text('Power:');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'input', _el_10);
    _DefaultValueAccessor_12_5 = new import3.DefaultValueAccessor(_el_12);
    _NgValueAccessor_12_6 = [_DefaultValueAccessor_12_5];
    _NgModel_12_7 = new import5.NgModel(null, _NgValueAccessor_12_6);
    _el_9.addEventListener('input', eventHandler1(_handle_input_9_1));
    _el_9.addEventListener('blur', eventHandler0(_DefaultValueAccessor_9_5.touchHandler));
    final subscription_0 = _NgModel_9_7.update.listen(eventHandler1(_handle_ngModelChange_9_0));
    _el_12.addEventListener('input', eventHandler1(_handle_input_12_1));
    _el_12.addEventListener('blur', eventHandler0(_DefaultValueAccessor_12_5.touchHandler));
    final subscription_1 = _NgModel_12_7.update.listen(eventHandler1(_handle_ngModelChange_12_0));
    init(const [], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.DefaultValueAccessor) && (9 == nodeIndex))) {
      return _DefaultValueAccessor_9_5;
    }
    if ((identical(token, const import11.MultiToken<import12.ControlValueAccessor>('NgValueAccessor')) && (9 == nodeIndex))) {
      return _NgValueAccessor_9_6;
    }
    if (((identical(token, import5.NgModel) || identical(token, import13.NgControl)) && (9 == nodeIndex))) {
      return _NgModel_9_7;
    }
    if ((identical(token, import3.DefaultValueAccessor) && (12 == nodeIndex))) {
      return _DefaultValueAccessor_12_5;
    }
    if ((identical(token, const import11.MultiToken<import12.ControlValueAccessor>('NgValueAccessor')) && (12 == nodeIndex))) {
      return _NgValueAccessor_12_6;
    }
    if (((identical(token, import5.NgModel) || identical(token, import13.NgControl)) && (12 == nodeIndex))) {
      return _NgModel_12_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroDetailComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_9_7.model = _ctx.hero.name;
    _NgModel_9_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_9_7.ngOnInit();
    }
    changed = false;
    _NgModel_12_7.model = _ctx.hero.power;
    _NgModel_12_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_12_7.ngOnInit();
    }
    final currVal_0 = import9.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.hero.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_6.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_9_0($event) {
    ctx.hero.name = $event;
  }

  void _handle_input_9_1($event) {
    _DefaultValueAccessor_9_5.onChange($event.target.value);
  }

  void _handle_ngModelChange_12_0($event) {
    ctx.hero.power = $event;
  }

  void _handle_input_12_1($event) {
    _DefaultValueAccessor_12_5.onChange($event.target.value);
  }
}

AppView<import1.HeroDetailComponent> viewFactory_HeroDetailComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroDetailComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroDetailComponentHost = const [];

class _ViewHeroDetailComponentHost0 extends AppView<dynamic> {
  ViewHeroDetailComponent0 _compView_0;
  import1.HeroDetailComponent _HeroDetailComponent_0_5;
  _ViewHeroDetailComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroDetailComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroDetailComponent_0_5 = new import1.HeroDetailComponent();
    _compView_0.create(_HeroDetailComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroDetailComponent>(0, this, rootEl, _HeroDetailComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroDetailComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroDetailComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroDetailComponent> HeroDetailComponentNgFactory = const ComponentFactory<import1.HeroDetailComponent>('hero-detail', viewFactory_HeroDetailComponentHost0, _HeroDetailComponentMetadata);
const _HeroDetailComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroDetailComponent, HeroDetailComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
