/****************************************************************************************
*                                                                                       *
*  Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer  *
*  a média aritmética desses números.                                                    *
*                                                                                       *
****************************************************************************************/

const prompt = require('prompt-sync')();
let sum = 0;
let count = 0;

do {
    let input = parseFloat(prompt('Digite um número (ou 0 para finalizar): '));
    if (!isNaN(number)) {
        sum += number;
        count++;
    } else {
        console.log('Entrada inválida. Por favor, digite um número válido.');
    }
} while (number !== 0);


let average = count > 0 ? sum / count : 0;
console.log(`A média aritmética é: ${average.toFixed(3)}`);
