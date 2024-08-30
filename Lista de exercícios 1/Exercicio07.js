/***************************************************************
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma *
 * dúzia, e R$ 0,25 se forem compradas pelo menos doze.        *
 * Escreva um algoritmo que leia o número de maçãs             *
 * compradas, calcule e escreva o valor total da compra.       *
 **************************************************************/
function returnPrice(apples)
{
    return apples >= 12 ? apples * 0.25 : apples * 0.30;
}
let apples = parseInt(process.argv[2]);
if (isNaN(apples) || apples < 0) 
    console.log("Número de maças inválido.")
else
    console.log(`${apples} maças custam R$${returnPrice(apples).toFixed(2)}`)