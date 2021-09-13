import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 10px
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  parametro: string = "";
  heroe!: Heroes; 

  constructor(private activatedRoute: ActivatedRoute, 
    private heroeService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroeService.getHeroePorId(id)))
    .subscribe( heroe =>{
      this.heroe = heroe;
    }
    );
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
