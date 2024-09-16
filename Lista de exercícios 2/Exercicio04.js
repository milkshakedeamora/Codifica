/******************************************
 * 4. Iterando Sobre Arrays de Objetos     *
 * Objetivo: Crie um array de objetos      *
 * pessoas, onde cada objeto representa    *
 * uma pessoa com nome, idade, e cidade.   *
 * Use for of para exibir as informações   *
 * de cada pessoa no console.              *
 ******************************************/
const pessoas = [
    { nome: 'Lucas', idade: 15, cidade: 'São Paulo' },
    { nome: 'Bianca', idade: 14, cidade: 'Rio de Janeiro' },
    { nome: 'Isabel', idade: 62, cidade: 'São Paulo' },
    { nome: 'Claudio', idade: 17, cidade: 'Recife' }
];

for (const pessoa of pessoas) {
    console.log(`${pessoa.nome}, tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`);
}