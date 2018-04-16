import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';

import 'hero.dart';
import 'hero_detail_component.dart';
import 'hero_service.dart';

@Component(
  selector: 'hero-list',
  templateUrl: 'hero_list_component.html',
  directives: [coreDirectives, formDirectives, HeroDetailComponent],
  providers: [const ClassProvider(HeroService)],
)
class HeroListComponent implements OnInit {
  List<Hero> heroes;
  Hero selectedHero;
  final HeroService _heroService;

  HeroListComponent(this._heroService);

  void ngOnInit() async {
    heroes = await _heroService.getAll();
  }

  void selectHero(Hero hero) {
    selectedHero = hero;
  }
}
