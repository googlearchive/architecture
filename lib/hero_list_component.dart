import 'package:angular2/core.dart';

import 'hero.dart';
import 'hero_detail_component.dart';
import 'hero_service.dart';

@Component(
    selector: 'hero-list',
    templateUrl: 'hero_list_component.html',
    directives: const [HeroDetailComponent],
    providers: const [HeroService])
/*
class HeroListComponent { ... }
*/
class HeroListComponent {
  List<Hero> heroes;
  Hero selectedHero;
  HeroListComponent(HeroService heroService) {
    heroes = heroService.getHeroes();
  }
  selectHero(Hero hero) {
    selectedHero = hero;
  }
}
