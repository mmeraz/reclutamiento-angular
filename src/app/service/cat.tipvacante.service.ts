import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cattipovacante } from '../model/cattipovacante.model';


export class TipoVacanteService {
    private url = 'http://localhost:8085/api/v1/';


  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Cattipovacante[]>(this.url + '/fetch');
  }

  addtipovacante(tvaTipo) {
    const obj = {
      tvaTipo: tvaTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }


}

