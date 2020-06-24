import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];

  constructor( private _heroesService:HeroesService, private router:Router) { 

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(i:number){
    this.router.navigate(['/heroe',i])
  }

}
