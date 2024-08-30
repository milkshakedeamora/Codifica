/*************************************************************************************
* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.*
* Utilize switch-case para implementar a lógica de cada opção selecionada.           *
*************************************************************************************/
const prompt = require('prompt-sync')();
console.log("Menu Interativo:");
console.log("1. Bom dia");
console.log("2. Boa tarde");
console.log("3. Boa noite");

let option = prompt('Escolha uma opção (1, 2 ou 3): ');

switch (option) {
    case '1':
        console.log("Bom dia! Espero que você tenha um ótimo dia!");
        break;
    case '2':
        console.log(`Boa tarde! Espero que você esteja tendo um ótimo dia!`);
        break;
    case '3':
        console.log("Boa noite! Espero que você tenha tido um ótimo dia!");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        break;
}
