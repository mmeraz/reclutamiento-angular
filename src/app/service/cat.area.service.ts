import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catarea } from '../model/catarea.model';

@Injectable({
  providedIn: 'root'
}
)
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio';



  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Catarea[]>(this.url + '/fetch');
  }

  addarea(arnTipo) {
    const obj = {
      arnTipo: arnTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }


}

