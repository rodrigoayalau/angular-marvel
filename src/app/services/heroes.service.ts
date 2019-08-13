import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  // heroeArray: any[] = [];

  private urlHeroe = 'http://gateway.marvel.com/v1/public/characters?';
  private urlHeroes = 'https://gateway.marvel.com:443/v1/public/characters?';
  private limit = '100';
  // private name = 'hulk';
  private ts = '1565657338';
  private apiKey = '9834ecaa13e2b0ab01c3a90c857548f9';
  private hash = 'b8cb8a4fd2046aecef9c1558ae9ddbb1';

 /* constructor(private http: HttpClient) {
    this.http.get(`${this.urlHeroes}limit=${this.limit}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`).subscribe((resp: any) => {
      console.log(resp);
      console.log(resp.data.results);
      this.heroeArray = resp.data.results;
    });
   } */

   constructor( private http: HttpClient ) {

   }

  getHeroes() {

    return this.http.get(`${this.urlHeroes}limit=${this.limit}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`);

  }


}

// http://gateway.marvel.com/v1/public/characters?name=hulk&ts=1565657338&apikey=9834ecaa13e2b0ab01c3a90c857548f9&hash=b8cb8a4fd2046aecef9c1558ae9ddbb1

// https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=9834ecaa13e2b0ab01c3a90c857548f9





