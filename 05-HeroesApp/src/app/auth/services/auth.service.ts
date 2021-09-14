import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UrlUsuarios: string = 'http://localhost:3000/usuarios/';
  private auth: Auth | undefined;

  get Auth(){
    return {...this.auth};
  }

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(this.UrlUsuarios + 1)
                    .pipe(
                      tap(resp => {
                        this.auth = resp;
                        localStorage.setItem('id', resp.id);
                      })
                    );
  }

  logout(){
    this.auth = undefined;
  }

  estado(): Observable<boolean>{
    return !(localStorage.getItem('id')) ? of(false): 
    this.http.get<Auth>(this.UrlUsuarios + 1).pipe(
      map(auth => {
        this.auth = auth;
        return true;
      })
    ) ;
  }

}
