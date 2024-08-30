/*****************************************************************************
* Crie um programa que calcula o fatorial de um número fornecido pelo usuário*
* utilizando um loop for ou while.                                           *
*****************************************************************************/
function returnFatorial(number) 
{
    if (number < 0) return 'Número inválido'; 
    let result = 1;
    for (let i = 1; i <= number; i++)
        result *= i;    
    return result;
}
let number = parseInt(process.argv[2]);
if (isNaN(number)) 
    console.log("Número inválido.");
else
    console.log(`Fatorial de ${number}: ${returnFatorial(number)}`);