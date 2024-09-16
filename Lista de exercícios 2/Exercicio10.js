/******************************************
 * 10. Criando Relatórios com Objetos e   *
 * Arrays                                *
 * Objetivo: Crie um array de objetos     *
 * vendas, onde cada objeto tem produto,  *
 * quantidade e valor. Use forEach para   *
 * calcular o valor total de vendas de    *
 * todos os produtos.                    *
 ******************************************/

const vendas = [
    { produto: 'Geladeira',quantidade: 800 ,  preco: 12000 },
    { produto: 'Fogão',quantidade: 287,  preco: 6800 },
    { produto: 'Sofá', quantidade: 281,  preco: 900 },
    { produto: 'Cama', quantidade: 2864,  preco: 1400}
]

let totalVendas = 0;
vendas.forEach(produto => {
    totalVendas+= (produto.quantidade * produto.preco)
});
console.log(totalVendas);