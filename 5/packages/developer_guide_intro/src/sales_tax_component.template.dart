// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'sales_tax_component.dart';
export 'sales_tax_component.dart';
import 'package:angular/angular.dart';
import 'sales_tax_service.dart';
import 'tax_rate_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'sales_tax_service.template.dart' as _ref1;
import 'tax_rate_service.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'sales_tax_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/pipes/number_pipe.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';
import 'tax_rate_service.dart' as import13;
import 'sales_tax_service.dart' as import14;

const List<dynamic> styles$SalesTaxComponent = const [];

class ViewSalesTaxComponent0 extends AppView<import1.SalesTaxComponent> {
  import2.Element _el_0;
  import2.InputElement _el_3;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import5.CurrencyPipe _pipe_currency_0;
  static RenderComponentType _renderType;
  ViewSalesTaxComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('sales-tax');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$SalesTaxComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.SalesTaxComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Sales Tax Calculator');
    _el_0.append(_text_1);
    import2.Text _text_2 = new import2.Text('Amount:');
    parentRenderNode.append(_text_2);
    _el_3 = createAndAppend(doc, 'input', parentRenderNode);
    var _anchor_4 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_4);
    _appEl_4 = new ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = new TemplateRef(_appEl_4, viewFactory_SalesTaxComponent1);
    _NgIf_4_9 = new NgIf(_appEl_4, _TemplateRef_4_8);
    _el_3.addEventListener('change', eventHandler1(_handle_change_3_0));
    _pipe_currency_0 = new import5.CurrencyPipe();
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_amountBox = _el_3;
    _NgIf_4_9.ngIf = (local_amountBox.value != '');
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
  }

  void _handle_change_3_0($event) {
    0;
  }
}

AppView<import1.SalesTaxComponent> viewFactory_SalesTaxComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSalesTaxComponent0(parentView, parentIndex);
}

class _ViewSalesTaxComponent1 extends AppView<import1.SalesTaxComponent> {
  import2.DivElement _el_0;
  import2.Text _text_2;
  var _expr_0;
  String Function(dynamic, String, bool, String) _pipe_currency_0_0;
  _ViewSalesTaxComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSalesTaxComponent0._renderType;
  }
  @override
  ComponentRef<import1.SalesTaxComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    import2.Text _text_1 = new import2.Text('\n      The sales tax is  \n       ');
    _el_0.append(_text_1);
    _text_2 = new import2.Text('');
    _el_0.append(_text_2);
    _pipe_currency_0_0 = import9.pureProxy4((parentView as ViewSalesTaxComponent0)._pipe_currency_0.transform);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.SalesTaxComponent _ctx = ctx;
    final local_amountBox = (parentView as ViewSalesTaxComponent0)._el_3;
    final currVal_0 = import9.interpolate0(_pipe_currency_0_0(_ctx.getTax(local_amountBox.value), 'USD', true, '1.2-2'));
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.SalesTaxComponent> viewFactory_SalesTaxComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSalesTaxComponent1(parentView, parentIndex);
}

const List<dynamic> styles$SalesTaxComponentHost = const [];

class _ViewSalesTaxComponentHost0 extends AppView<dynamic> {
  ViewSalesTaxComponent0 _compView_0;
  import13.TaxRateService _TaxRateService_0_5;
  import14.SalesTaxService _SalesTaxService_0_6;
  import1.SalesTaxComponent _SalesTaxComponent_0_7;
  _ViewSalesTaxComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewSalesTaxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TaxRateService_0_5 = new import13.TaxRateService();
    _SalesTaxService_0_6 = new import14.SalesTaxService(_TaxRateService_0_5);
    _SalesTaxComponent_0_7 = new import1.SalesTaxComponent(_SalesTaxService_0_6);
    _compView_0.create(_SalesTaxComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.SalesTaxComponent>(0, this, rootEl, _SalesTaxComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.TaxRateService) && (0 == nodeIndex))) {
      return _TaxRateService_0_5;
    }
    if ((identical(token, import14.SalesTaxService) && (0 == nodeIndex))) {
      return _SalesTaxService_0_6;
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

AppView viewFactory_SalesTaxComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSalesTaxComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.SalesTaxComponent> SalesTaxComponentNgFactory = const ComponentFactory<import1.SalesTaxComponent>('sales-tax', viewFactory_SalesTaxComponentHost0, _SalesTaxComponentMetadata);
const _SalesTaxComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SalesTaxComponent, SalesTaxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
