import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero // property binding

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id') // getting param from route 
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
