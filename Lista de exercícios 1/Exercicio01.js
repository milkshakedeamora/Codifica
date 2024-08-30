/*******************************************************
 * Escreva um programa que recebe um número inteiro    *
 * e verifica se ele é par ou ímpar utilizando uma     *
 * estrutura de controle if.                           *
 *******************************************************/
function iseven(number)
{
    return (number%2==0);
}
let number = parseInt(process.argv[2]);
if (isNaN(number)) 
    console.log("Número inválido.");
else if(iseven(number))
    console.log(`${number} é par.`);
else
    console.log(`${number} não é par.`);