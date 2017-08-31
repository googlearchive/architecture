import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';

import 'hero.dart';
import 'hero_detail_component.dart';
import 'hero_service.dart';

@Component(
  selector: 'hero-list',
  templateUrl: 'hero_list_component.html',
  directives: const [CORE_DIRECTIVES, formDirectives, HeroDetailComponent],
  providers: const [HeroService],
)
class HeroListComponent implements OnInit {
  List<Hero> heroes;
  Hero selectedHero;
  final HeroService _heroService;

  HeroListComponent(this._heroService);

  void ngOnInit() {
    heroes = _heroService.getHeroes();
  }

  void selectHero(Hero hero) {
    selectedHero = hero;
  }
}
