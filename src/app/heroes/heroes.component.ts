import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//Refactor this property with interface hero
  // hero = "Windstrom";
  heroes: Hero[];
 selectedHero: Hero;
 
  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    console.log('memanggil getheroes')
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes = heroes);
  }

}
