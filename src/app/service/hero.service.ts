import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  powers: Observable<string[]> = of(['Really Smart', 'Super Flexible',
    'Spray Fire', 'Weather Changer']);

  constructor() { }

  getPower() {
    return this.powers
  }

  logHero(hero: Hero) {
    console.log('Hero : ', hero)
  }
}
