/******************************************
 * 13. Implementando um Carrinho de Compras *
 * Objetivo: Crie um objeto carrinho com   *
 * uma propriedade itens, que é um array   *
 * de objetos. Cada objeto dentro de itens *
 * deve representar um produto no carrinho,*
 * com nome, quantidade, e precoUnitario.  *
 * Use forEach para calcular o valor total *
 * do carrinho.                            *
 ******************************************/
const carrinho = {
    itens: [
        { nome: 'Geladeira', quantidade: 1, precoUnitario: 12000 },
        { nome: 'Fogão', quantidade: 1, precoUnitario: 6800 },
        { nome: 'Sofá', quantidade: 2, precoUnitario: 900 },
        { nome: 'Cama', quantidade: 1, precoUnitario: 1400 }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(valorTotal);