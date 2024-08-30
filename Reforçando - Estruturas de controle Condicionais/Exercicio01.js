/**********************************************************************************************************
* 1 - Verifique se um número é positivo, negativo ou zero                                                 *
* Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo,    *
* negativo ou zero. Imprima uma mensagem apropriada para cada caso.                                       *
**********************************************************************************************************/
let number = parseInt(process.argv[2]);
if (isNaN(number)) 
    console.log("Número inválido.");
if(number < 0)
    console.log(`${number} é negativo.`);
if(number === 0)
    console.log(`${number} é zero.`);
if(number > 0)
    console.log(`${number} é positivo.`);