import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, 
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap((params) => 
    this.paisService.buscarxCodigo(params.id)),
    tap(console.log))
    .subscribe(resp =>{
      this.pais = resp;
    });

      // this.activatedRoute.params.subscribe(params =>{
      //   console.log(params);
      //     this.paisService.buscarxCodigo(params.id).subscribe(pais => {
      //       console.log(pais);
      //       this.pais = pais;
      //     })
      // });
  }

}
