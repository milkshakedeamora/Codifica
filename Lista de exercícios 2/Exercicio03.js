/******************************************
 * 3. Filtrando Propriedades de Objetos    *
 * Objetivo: Dado um objeto produto com    *
 * várias propriedades, crie uma função    *
 * que retorna um novo objeto contendo     *
 * apenas as propriedades cujo valor seja  *
 * maior que um valor específico. Use      *
 * for in para filtrar as propriedades.    *
 ******************************************/

const produto = {
    preco: 150,
    estoque: 300,
    exposto:157,
    reservado: 458,
    vendido: 1785,
    avaliacao: 4.5
};

function filtrarPropriedades(produto, valorLimite) {
    const produtoFiltrado = {};

    for (let propriedade in produto) 
        if (produto[propriedade] > valorLimite) produtoFiltrado[propriedade] = produto[propriedade];
    return produtoFiltrado;
}
let valor = parseInt(process.argv[2]);

if (isNaN(valor)) 
    console.log("Valor Inválido.");
else
    console.log(filtrarPropriedades(produto, valor));