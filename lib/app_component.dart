import 'package:angular2/angular2.dart';

import 'hero_list_component.dart';
import 'sales_tax_component.dart';

@Component(
    selector: 'my-app',
    template: '''
      <hero-list></hero-list>
      <sales-tax></sales-tax>''',
    directives: const [HeroListComponent, SalesTaxComponent])
class AppComponent {}
