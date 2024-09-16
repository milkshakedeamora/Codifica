/******************************************
 * 12. Atualizando um Array de Objetos     *
 * Objetivo: Crie um array de objetos      *
 * estoque, onde cada objeto tem produto,  *
 * quantidade e minimo. Use forEach para   *
 * atualizar a quantidade dos produtos    *
 * que estão abaixo do mínimo, duplicando  *
 * suas quantidades.                      *
 ******************************************/

const estoque = [
    { produto: 'Geladeira',quantidade: 80 ,  minimo: 100 },
    { produto: 'Fogão',quantidade: 287,  minimo: 68 },
    { produto: 'Sofá', quantidade: 281,  minimo: 90},
    { produto: 'Cama', quantidade: 9,  minimo: 140},
]
estoque.forEach(produto => {
    if(produto.quantidade < produto.minimo) produto.quantidade *= 2;
});
console.log(estoque);