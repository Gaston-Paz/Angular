import { Component } from '@angular/core';


interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'template/dinamicos'
    },
    {
      texto: 'Switch',
      ruta: 'template/switches'
    }
  ]

  reactivoMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'reactivo/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'reactivo/dinamicos'
    },
    {
      texto: 'Switch',
      ruta: 'reactivo/switches'
    }
  ]


}
