import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe:any={};
  constructor(private activaterouter:ActivatedRoute,
    private heroesservice:HeroesService) { 
    this.activaterouter.params.subscribe(params =>{
        this.heroe = this.heroesservice.getHeroe(params['id']);
        console.log(this.heroe);
    })
  }

  

}
