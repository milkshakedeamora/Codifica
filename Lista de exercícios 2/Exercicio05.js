/**********************************************
 * 5. Calculando Valores em Arrays de Objetos *
 * Objetivo: Crie um array de objetos         *
 * alunos, cada um com propriedades nome,     *
 * nota1, e nota2. Use for of para calcular   *
 * a média das notas de cada aluno e exibir   *
 * o nome do aluno junto com sua média.       *
 *********************************************/
const alunos = [
    { nome: 'Breno', nota1: 7, nota2: 5},
    { nome: 'Isaac', nota1:4, nota2: 10},
    { nome: 'Luany', nota1: 10, nota2: 9.5},
    { nome: 'Thiago', nota1: 8, nota2: 7}
];

for (const aluno of alunos) {
    console.log(`Aluno ${aluno.nome}, tem media ${(aluno.nota1+aluno.nota2)/2}`);
}