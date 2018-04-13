import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title: string;


  constructor() {
    this.title = 'Tour of Heroes';
  }

  ngOnInit(): void {
  }
}
