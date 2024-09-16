/******************************************
 * 7. Modificando Objetos em um Array      *
 * Objetivo: Crie um array de objetos      *
 * produtos, onde cada objeto tem nome,    *
 * preco, e desconto. Use forEach para     *
 * aplicar um desconto de 10% em todos os  *
 * produtos e exibir o novo preço.         *
 ******************************************/
const produtos = [
    { nome: 'Geladeira', preco: 12000, desconto: 10 },
    { nome: 'Fogão', preco: 6800, desconto: 10 },
    { nome: 'Sofá', preco: 900, desconto: 10 },
    { nome: 'Cama', preco: 1400, desconto: 10 }
];

produtos.forEach(produto => {
    produto.preco *= (100-produto.desconto)/100;
});
console.log(produtos);