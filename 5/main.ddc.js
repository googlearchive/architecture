define(['dart_sdk', 'packages/angular/angular.template', 'packages/developer_guide_intro/app_component.template', 'packages/angular/src/platform/bootstrap', 'packages/developer_guide_intro/app_component'], function(dart_sdk, angular, app_component, bootstrap, app_component$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const app_component$46template = app_component.app_component$46template;
  const src__platform__bootstrap = bootstrap.src__platform__bootstrap;
  const app_component$0 = app_component$.app_component;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    app_component$46template.initReflector();
  };
  dart.fn(main$46template.initReflector, VoidTovoid());
  main.main = function() {
    src__platform__bootstrap.bootstrapStatic(dart.dynamic, dart.wrapType(app_component$0.AppComponent), [], main$46template.initReflector);
  };
  dart.fn(main.main, VoidTovoid());
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","main.template.dart"],"names":[],"mappings":";;;;;;;;;;QAMoC,eAAE;;;kBAAF,eAAE;MAAF,ACQhC,eDRkC,SCQ1B;YAAG;;;;EDRqB,eAAE;ACUpC,kBDVkC,ACU9B,eDVgC,SCUxB,GAAE;AACZ;;AAEF,IDbkC,eAAE,YCazB;AAEX,IDfkC,ACe5B,eDf8B,cCejB;AACnB,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB;UDlBoC,eAAE;;AAApC,4CAAe,eAAC,2CAAY,EAAE,IAAI,AAAG,eAAD,cAAc;EACpD;;EADoC,eAAE;;0BAAF,eAAE;;;;;qBAAF,eAAE","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
