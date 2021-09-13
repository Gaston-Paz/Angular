import { Component, OnInit, Input  } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroeTarjeta.component.html',
  styles: [`
  mat-card{
    margin-top: 20px;
  }
`
  ]
})
export class HeroeTarjetaComponent implements OnInit {

    @Input() heroe!: Heroes;

  constructor() { }

  ngOnInit(): void {
  }

}
