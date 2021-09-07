import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private UrlApi: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'T64KlSvhkU7YXBpuAf3suyFnKVLWmVZ9';
  private _historial: string [] = [];
  public busqueda: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    
    ///Se carga de sesion el historial de busqueda
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    ///Se carga de sesion la última busqueda
    this.busqueda = JSON.parse(localStorage.getItem('ultBusqueda')!) || [];

    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial = this._historial.splice(0,10);
        ///Se guarda en sesion el historial
        localStorage.setItem('historial', JSON.stringify(this._historial));  
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.UrlApi}/search`, {params: params})
    .subscribe(resp => {
      console.log(resp.data);
      this.busqueda = resp.data;
      ///Se guarda en sesion la última búsqueda
      localStorage.setItem('ultBusqueda', JSON.stringify(this.busqueda));

    });

    console.log(this._historial);

  }

}
