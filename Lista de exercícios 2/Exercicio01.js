/******************************************
 * 1. Acessando Propriedades de Objetos   *
 * Objetivo: Crie um objeto carro com     *
 * propriedades como marca, modelo, ano,  *
 * e cor. Use for in para iterar sobre as *
 * propriedades e exibir seus valores no  *
 * console.                               *
 ******************************************/
const carro = {
    marca: 'Chevrolet',
    modelo: 'Impala',
    ano: 1967,
    cor: 'Preto'
};

for (let p in carro) {
    console.log(`${p}: ${carro[p]}`);
}

