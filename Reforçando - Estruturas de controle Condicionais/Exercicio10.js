/****************************************************************************************
*                                                                                       *
*  10 - Calcule o IMC e determine a categoria                                           *
*                                                                                       *
*  Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o     *
*  Índice de Massa Corporal (IMC) e use uma estrutura if/else para determinar a         *
*  categoria:                                                                          *
*                                                                                       *
*  - Abaixo do peso: IMC < 18.5                                                          *
*  - Peso normal: IMC 18.5 - 24.9                                                       *
*  - Sobrepeso: IMC 25 - 29.9                                                            *
*  - Obesidade grau I: IMC 30 - 34.9                                                     *
*  - Obesidade grau II: IMC 35 - 39.9                                                    *
*  - Obesidade grau III: IMC >= 40                                                        *
*                                                                                       *
*  Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso /     *
*  altura²).                                                                           *
*                                                                                       *
****************************************************************************************/
function returnIMC(height,weight)
{
    let imc = (weight/(height*height));  

    if(imc < 18.5)
        return(`IMC ${imc.toFixed(2)}: Abaixo do peso.`);
    else if(imc < 25)
        return(`IMC ${imc.toFixed(2)}: Peso normal.`)
    else if(imc <30)
        return (`IMC ${imc.toFixed(2)}: Sobrepeso.`)
    else if(imc < 35)
        return (`IMC ${imc.toFixed(2)}: Obesidade grau I.`)
    else if(imc < 35)
        return (`IMC ${imc.toFixed(2)}: Obesidade grau I.`)
    else if(imc < 40)
        return (`IMC ${imc.toFixed(2)}: Obesidade grau II.`)
    else
    return (`IMC ${imc.toFixed(2)}: Obesidade grau III.`)

}

let height = parseFloat(process.argv[2]);
let weight = parseFloat(process.argv[3]);
if(height > 40)
    height/=100;

if (isNaN(height) || isNaN(weight) ||  height < 0.4 ||  height > 2.40 ||  weight < 1.5) 
    console.log("Altura ou Peso inválido.");

else
    console.log(returnIMC(height,weight));