import { Injectable } from '@angular/core';
import { HEROES } from '../constants';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      if(this.heroes.length) {
        resolve(this.heroes);
        
      } else {
        this.heroes = HEROES;
        setTimeout(() => resolve(this.heroes), 1500);
      }
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(this.equalsId.bind(null, id)));
  }

  equalsId(id: number, obj: any) {
    return obj.id === id;
  }
}