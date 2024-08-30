/***************************************************************************************************
 * 4 - Verifique se um número é par ou ímpar                                                       *
 * Escreva um programa que leia um número e use uma estrutura                                      *
 * if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.             *
 **************************************************************************************************/
let number = parseFloat(process.argv[2]);
if(number % 2 == 0)
    console.log(`${number} é par.`);
else
    console.log(`${number} é impar.`);