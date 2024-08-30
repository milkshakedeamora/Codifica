/*******************************************************
 * Crie um programa que classifica a idade de uma pessoa *
 * em categorias (criança, adolescente, adulto, idoso)   *
 * com base no valor fornecido, utilizando uma estrutura *
 * de controle if-else.                                  *
 *******************************************************/

function returnAge(age)
{
    if(age < 0)
        console.log("Idade Inválida.");
    else if (age < 14)
        console.log("Criança.");
    else if (age < 20)
        console.log("Adolescente.");
    else if (age < 125)
        console.log("Idoso.");
    else
        console.log("Ainda vivo ??");

}

let age = parseInt(process.argv[2]);

if (isNaN(age)) 
    console.log("Idade Inválida.");
else
    returnAge(age);