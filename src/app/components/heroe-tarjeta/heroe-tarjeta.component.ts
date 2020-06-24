import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() index:number;
 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  verHeroe(){
    // this.router.navigate(['/heroe',this.index])
  }

}
