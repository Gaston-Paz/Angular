import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 10px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel-Comics'
    }
  ]

  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroesService:HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')){
      this.activatedRoute.params
      .pipe(switchMap(({id}) => this.heroesService.getHeroePorId(id)  ))
      .subscribe( heroe => this.heroe = heroe);

    }

  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    if(!this.heroe.id){
      this.heroesService.guardarHeroe(this.heroe)
      .subscribe(resp => 
        this.router.navigate(['/heroes/editar', resp.id]));
        this.mostrarSnak("Registro Creado")
      
    }else{
      this.heroesService.editarHeroe(this.heroe)
      .subscribe(resp => this.mostrarSnak("Registro Actualizado"));
    }
  }

  eliminar(){
    
    const dialog = this.dialog.open(ConfirmarComponent, {
       width:'250px',
       data: this.heroe
      });
    
    if(dialog.afterClosed().subscribe((result) =>
      {if(result){
        this.heroesService.eliminarHeroe(this.heroe).subscribe(resp => {
          this.router.navigate(['/heroes'])
        });
        this.mostrarSnak("Registro Eliminado")}
      })){
      

    }

  }

  mostrarSnak(mensaje: string){
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    });
  }

}


