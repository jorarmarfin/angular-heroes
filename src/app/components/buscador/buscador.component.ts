import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  termino:string;
  constructor(private activateroute:ActivatedRoute,
    private heroeservice:HeroesService) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe(params=>{
      this.heroes = this.heroeservice.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
    });
  }
  

}
