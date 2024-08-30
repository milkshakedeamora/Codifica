/*******************************************************************
* Crie um programa que exibe a tabuada de um número fornecido pelo *
* usuário(de 1 a 10) utilizando um loop for.                       *
*******************************************************************/
function multiplicationTable(number)
{
    for(let i = 1; i <=10; i++)
        console.log(`${number} ⨯ ${i} = ${number*i}`);

}
let number = parseInt(process.argv[2]);
if (isNaN(number)) 
    console.log("Número inválido.");
else
    multiplicationTable(number);