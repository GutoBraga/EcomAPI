import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './hist-compras.model';
import { Cliente } from '../../bodylogin/shared/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class HistComprasService {

  constructor(private http: HttpClient) { }
  public getPedidos():Observable<any> {
    return this.http.get(`api/pedidos/cliente/3`);
  }

  
}
