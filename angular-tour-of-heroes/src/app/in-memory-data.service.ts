import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Doom' },
      { id: 12, name: 'Iron Man' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Thor' },
      { id: 15, name: 'Captain Marvel' },
      { id: 16, name: 'Nebula' },
      { id: 17, name: 'Star Lord' },
      { id: 18, name: 'Dr Strange' },
      { id: 19, name: 'Rocket Raccoon' },
      { id: 20, name: 'Scarlet Witch' },
      { id: 1, name: 'Captain America' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
