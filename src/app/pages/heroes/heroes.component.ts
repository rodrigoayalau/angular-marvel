import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 // constructor( private heroesService: HeroesService) {
 // }

 heroes: any[] = [];

 constructor( private heroesService: HeroesService ) {
   this.heroesService.getHeroes()
   .subscribe( (data: any) => {
     console.log( data.data.results );
     this.heroes = data.data.results;

   });
 }

  ngOnInit() {
  }

}
