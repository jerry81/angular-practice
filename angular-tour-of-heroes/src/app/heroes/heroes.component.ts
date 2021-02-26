import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock/mock-heroes';
import { Hero } from './interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES
  selectedHero: Hero

  constructor() { }

  ngOnInit(): void { // this is a lifecycle hook, like created in vue
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

}
