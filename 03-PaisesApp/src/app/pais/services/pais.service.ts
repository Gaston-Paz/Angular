import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ApiUrl: string = 'https://restcountries.eu/rest/v2';
  private ApixNombre: string = '/name/';
  private ApixCapital: string = '/capital/';
  private ApixRegion: string = '/region/';
  private ApixCodigo: string = '/alpha/';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(this.ApiUrl + this.ApixNombre + termino);
  }

  buscarCapital(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(this.ApiUrl + this.ApixCapital + termino);
  }

  buscarRegion(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(this.ApiUrl + this.ApixRegion + termino);
  }

  buscarxCodigo(termino: string): Observable<Pais>{
    return this.http.get<Pais>(this.ApiUrl + this.ApixCodigo + termino);
  }

}
