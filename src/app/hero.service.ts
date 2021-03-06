import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient
  ) { }

  // getHeroes():Observable<Hero[]>{
  //   this.messagesService.add('HeroService: Fetch heroes');
  //   return of(HEROES);
  // }

  //getHeroes dengan HttpClient
  getHeroes(): Observable<Hero[]>{
    this.log('HeroService: Fetch with HttpClient');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero>{
    this.messagesService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find(hero=> hero.id === id));
  }

  private log(message: string){
    this.messagesService.add(`HeroService: ${message}`);
  }
}
