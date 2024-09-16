/******************************************
 * Agrupando Elementos com forEach        *
 * Objetivo: Crie um array de objetos      *
 * pedidos, onde cada pedido tem cliente,  *
 * produto, e quantidade. Use forEach para *
 * criar um objeto que agrupa a quantidade *
 * total de produtos por cliente.          *
 ******************************************/
const pedidos = [
    { cliente: 'Lucas', produto: 'Geladeira', quantidade: 1 },
    { cliente: 'Isabel', produto: 'Cama', quantidade: 1 },
    { cliente: 'Bianca', produto: 'Fogão', quantidade: 1 },
    { cliente: 'Lucas', produto: 'Sofá', quantidade: 2 },    
    { cliente: 'Bianca', produto: 'Geladeira', quantidade: 1 }
];

const totalPorCliente = {};
pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) totalPorCliente[pedido.cliente] += pedido.quantidade;  
    else totalPorCliente[pedido.cliente] = pedido.quantidade;     
});
console.log(totalPorCliente);