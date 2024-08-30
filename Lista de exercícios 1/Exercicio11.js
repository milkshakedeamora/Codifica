/******************************************************************************* 
* Escreva um programa que solicita ao usuário 5 números e calcula a soma total *
* utilizando um loop for.                                                      *
*******************************************************************************/
const prompt = require('prompt-sync')();

let sum = 0;

for (let i = 0; i < 5; i++) {
    let input = parseFloat(prompt(`Digite o número ${i + 1}: `));
    if (!isNaN(input)) {
        sum+=input;
    } else {
        console.log('Entrada inválida. Por favor, digite um número válido.');
        i--; 
    }
}
console.log(`A soma total é: ${sum}`);
