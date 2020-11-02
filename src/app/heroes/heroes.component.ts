import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//Refactor this property with interface hero
  // hero = "Windstrom";

  hero: Hero = {
    id: 1,
    name: "Windstrom"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
