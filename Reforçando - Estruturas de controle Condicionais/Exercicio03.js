/*************************************************************************************************
 * 3 - Calcule a média de três números e determine o conceito                                    *
 * Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura      *
 * if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.   *
 * Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.  *
 ************************************************************************************************/

let nota1 = parseFloat(process.argv[2]);
let nota2 = parseFloat(process.argv[3]);
let nota3 = parseFloat(process.argv[4]);
let media = (nota1+nota2+nota3)/3;

if(media <=2)
    console.log(`Nota: ${media.toFixed(2)}. Conceito F.`)
else if(media <=3.6)
    console.log(`Nota: ${media.toFixed(2)}. Conceito E.`)
else if(media <=5.2)
    console.log(`Nota: ${media.toFixed(2)}. Conceito D.`)
else if(media <=6.8)
    console.log(`Nota: ${media.toFixed(2)}. Conceito C.`)
else if(media <=8.4)
    console.log(`Nota: ${media.toFixed(2)}. Conceito B.`)
else
    console.log(`Nota: ${media.toFixed(2)}. Conceito A.`)