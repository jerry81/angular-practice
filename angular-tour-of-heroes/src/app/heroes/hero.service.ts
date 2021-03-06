import { Injectable } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero'
import { HEROES } from '../heroes/mock/mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ // participates in dependency injection system 
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { } // service in service scenario

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
