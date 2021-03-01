import { Component, OnInit } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HeroService } from './hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) { } // Inject in constructor

  ngOnInit(): void { // this is a lifecycle hook, like created in vue
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.messageService.add('HeroesComponent: heroes fetched successfully')
        this.heroes = heroes
      }) // like a callback
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

}
