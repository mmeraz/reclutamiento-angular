import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Catarea } from '../model/catarea.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

 

  constructor( private clienteHttp: HttpClient) {}

  getAreas(): Observable<Catarea[]> {
    return this.clienteHttp.get<Catarea[]>(this.url + '/fetch');
  }

  create(area: Catarea): Observable<Catarea>{
    return this.clienteHttp.post<Catarea>(this.url + '/create', area, {headers: this.httpHeaders});
  }
  
}

