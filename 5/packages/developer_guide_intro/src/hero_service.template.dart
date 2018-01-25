// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_service.dart';
export 'hero_service.dart';
import 'package:angular/angular.dart';
import 'backend_service.dart';
import 'hero.dart';
import 'logger_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'backend_service.template.dart' as _ref0;
import 'hero.template.dart' as _ref1;
import 'logger_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerFactory(
    HeroService,
    (Logger p0, BackendService p1) => new HeroService(p0, p1),
  );
  _ngRef.registerDependencies(
    HeroService,
    const [
      const [
        Logger,
      ],
      const [
        BackendService,
      ],
    ],
  );
}
