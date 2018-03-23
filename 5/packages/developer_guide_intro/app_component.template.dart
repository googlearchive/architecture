// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/backend_service.dart';
import 'src/hero_list_component.dart';
import 'src/hero_service.dart';
import 'src/logger_service.dart';
import 'src/sales_tax_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/backend_service.template.dart' as _ref1;
import 'src/hero_list_component.template.dart' as _ref2;
import 'src/hero_service.template.dart' as _ref3;
import 'src/logger_service.template.dart' as _ref4;
import 'src/sales_tax_component.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/hero_list_component.template.dart' as import3;
import 'src/hero_service.dart' as import4;
import 'src/hero_list_component.dart' as import5;
import 'src/sales_tax_component.template.dart' as import6;
import 'src/tax_rate_service.dart' as import7;
import 'src/sales_tax_service.dart' as import8;
import 'src/sales_tax_component.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import 'src/logger_service.dart' as import15;
import 'src/backend_service.dart' as import16;

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import3.ViewHeroListComponent0 _compView_0;
  import4.HeroService _HeroService_0_5;
  import5.HeroListComponent _HeroListComponent_0_6;
  import2.Element _el_1;
  import6.ViewSalesTaxComponent0 _compView_1;
  import7.TaxRateService _TaxRateService_1_5;
  import8.SalesTaxService _SalesTaxService_1_6;
  import9.SalesTaxComponent _SalesTaxComponent_1_7;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import3.ViewHeroListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _HeroService_0_5 = new import4.HeroService(parentView.injectorGet(import15.Logger, viewData.parentIndex), parentView.injectorGet(import16.BackendService, viewData.parentIndex));
    _HeroListComponent_0_6 = new import5.HeroListComponent(_HeroService_0_5);
    _compView_0.create(_HeroListComponent_0_6, []);
    _compView_1 = new import6.ViewSalesTaxComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    _TaxRateService_1_5 = new import7.TaxRateService();
    _SalesTaxService_1_6 = new import8.SalesTaxService(_TaxRateService_1_5);
    _SalesTaxComponent_1_7 = new import9.SalesTaxComponent(_SalesTaxService_1_6);
    _compView_1.create(_SalesTaxComponent_1_7, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_5;
    }
    if ((identical(token, import7.TaxRateService) && (1 == nodeIndex))) {
      return _TaxRateService_1_5;
    }
    if ((identical(token, import8.SalesTaxService) && (1 == nodeIndex))) {
      return _SalesTaxService_1_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroListComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_5;
  import16.BackendService __BackendService_0_6;
  import15.Logger __Logger_0_7;
  import4.HeroService __HeroService_0_8;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import16.BackendService get _BackendService_0_6 {
    if ((this.__BackendService_0_6 == null)) {
      (__BackendService_0_6 = new import16.BackendService());
    }
    return this.__BackendService_0_6;
  }

  import15.Logger get _Logger_0_7 {
    if ((this.__Logger_0_7 == null)) {
      (__Logger_0_7 = new import15.Logger());
    }
    return this.__Logger_0_7;
  }

  import4.HeroService get _HeroService_0_8 {
    if ((this.__HeroService_0_8 == null)) {
      (__HeroService_0_8 = new import4.HeroService(this._Logger_0_7, this._BackendService_0_6));
    }
    return this.__HeroService_0_8;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.BackendService) && (0 == nodeIndex))) {
      return _BackendService_0_6;
    }
    if ((identical(token, import15.Logger) && (0 == nodeIndex))) {
      return _Logger_0_7;
    }
    if ((identical(token, import4.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_8;
    }
    return notFoundResult;
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

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
