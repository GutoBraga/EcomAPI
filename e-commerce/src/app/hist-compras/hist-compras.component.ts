import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedidos.model';
import { Quantidade } from './pedidos.model';
import { HistComprasService } from './shared/hist-compras.service';

@Component({
  selector: 'app-hist-compras',
  templateUrl: './hist-compras.component.html',
  styleUrls: ['./hist-compras.component.css']
})
export class HistComprasComponent implements OnInit {

  pedidos: Pedido[];
  erro: any;
  constructor(private histComprasService: HistComprasService) { 

  }

  ngOnInit(): void {
    this.getPedidosPorId();
  }

  getPedidosPorId() {
    this.histComprasService.getPedidos().subscribe(
      response => {
        this.pedidos = response;
      });
    }
 

}
