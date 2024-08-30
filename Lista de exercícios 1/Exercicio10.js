/*************************************************************
 * Escreva um algoritmo para ler um número inteiro e         *
 * escrevê-lo na tela 10 vezes.                              *
 *************************************************************/
function repeatNumber(number)
{
    for(let i = 0; i <10; i++)
        console.log(number);

}
let number = parseInt(process.argv[2]);
if (isNaN(number)) 
    console.log("Número inválido.");
else
    repeatNumber(number);