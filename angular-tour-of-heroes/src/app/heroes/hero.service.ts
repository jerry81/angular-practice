import { Injectable } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero'
import { HEROES } from '../heroes/mock/mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from '../message.service';

@Injectable({ // participates in dependency injection system 
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } // service in service scenario

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
