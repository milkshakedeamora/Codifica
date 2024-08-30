/*************************************************************
 * Escreva um algoritmo para ler 2 valores (considere que  *
 * não serão lidos valores iguais) e escrevê-los em ordem  *
 * crescente.                                               *
 *************************************************************/
function returnAscendingOrder(a,b)
{
    if( a < b)
        console.log(`Ordem crescente são: ${a} , ${b}`);
    else
        console.log(`Ordem crescente são:${b} , ${a}`);
}

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
if (isNaN(a) || isNaN(b)) 
    console.log("Número(s) inválido(s).")
else
    returnAscendingOrder(a,b);