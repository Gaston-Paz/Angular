import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayus: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.mayus = !this.mayus;
  }

}
