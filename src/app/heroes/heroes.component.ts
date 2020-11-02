import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//Refactor this property with interface hero
  // hero = "Windstrom";

 selectedHero: Hero;

 onSelect(hero: Hero){
   this.selectedHero = hero;
 }

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
