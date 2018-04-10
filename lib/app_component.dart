import 'package:angular/angular.dart';

import 'src/backend_service.dart';
import 'src/hero_list_component.dart';
import 'src/hero_service.dart';
import 'src/logger_service.dart';
import 'src/sales_tax_component.dart';

@Component(
  selector: 'my-app',
  template: '''
    <hero-list></hero-list>
    <sales-tax></sales-tax>
  ''',
  directives: [HeroListComponent, SalesTaxComponent],
  providers: [BackendService, HeroService, Logger],
)
class AppComponent {}
