/******************************************
 * Contabilizando Elementos com uma        *
 * Condição                               *
 * Objetivo: Crie um array de objetos      *
 * clientes, cada um com propriedades      *
 * nome, idade, e cidade. Use forEach para *
 * contar quantos clientes têm mais de 30  *
 * anos.                                  *
 ******************************************/
const clientes = [
    { nome: 'Lucas', idade: 15, cidade: 'São Paulo' },
    { nome: 'Bianca', idade: 44, cidade: 'Rio de Janeiro' },
    { nome: 'Isabel', idade: 62, cidade: 'São Paulo' },
    { nome: 'Claudio', idade: 17, cidade: 'Recife' }
];

let clientesVelhos = 0;
clientes.forEach(cliente => {
    if(cliente.idade > 30) clientesVelhos++;
});
console.log(clientesVelhos);