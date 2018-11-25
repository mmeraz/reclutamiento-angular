import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Catarea } from '../model/catarea.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio'; 

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

 

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

