import { HttpClient } from '@angular/common/http';
import { Catarea } from '../model/catarea.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio';

  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Catarea[]>(this.url + '/fetch');
  }

}

