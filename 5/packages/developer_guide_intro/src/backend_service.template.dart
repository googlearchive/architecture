// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'backend_service.dart';
export 'backend_service.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'logger_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'logger_service.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:developer_guide_intro/src/logger_service.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(BackendService, (_i1.Logger p0) => new BackendService(p0));
  _ngRef.registerDependencies(BackendService, const [
    const [_i1.Logger]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
