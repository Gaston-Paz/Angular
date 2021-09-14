import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  UrlDBHeroes = 'http://localhost:3000/heroes/';


  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(this.UrlDBHeroes);
  }

  getHeroePorId(id: string): Observable<Heroes>{
    return this.http.get<Heroes>(this.UrlDBHeroes + id);
  }

  getSugerencias(termino: string) : Observable<Heroes[]>{
    return this.http.get<Heroes[]>(this.UrlDBHeroes + '?q=' + termino + '&_limit=6');
  }

  guardarHeroe(heroe: Heroes): Observable<Heroes>{
    return this.http.post<Heroes>(this.UrlDBHeroes, heroe);
  }

  editarHeroe(heroe: Heroes): Observable<Heroes>{
    return this.http.put<Heroes>(this.UrlDBHeroes + heroe.id, heroe);
  }

  eliminarHeroe(heroe: Heroes): Observable<Heroes>{
    return this.http.delete<Heroes>(this.UrlDBHeroes + heroe.id);
  }
}
