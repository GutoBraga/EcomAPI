export interface Pedido {
    idPedido: number;
    dtCompra: string;
    vlFrete: number;
    vlTotalPedido: number;
    qtItensPedido: number;
    idCliente: number;
    cdStatusPedido: number;
    items: [
        {
            idPedido: number;
            nrItemPedido: number;
            cdProduto: number;
            dsProduto: string;
            vlPedidoItem: number;
        }
    ]
}