/*************************************************************
 * Escreva um programa que calcula o Índice de Massa         *
 * Corporal (IMC) de uma pessoa e determina a categoria de   *
 * peso (baixo peso, peso normal, sobrepeso, obesidade)      *
 * utilizando uma estrutura de controle if-else.             *
 *************************************************************/
function returnIMC(height,weight)
{
    let imc = (weight/(height*height));  

    if(imc < 16)
        return(`IMC ${imc.toFixed(2)}: Magreza grave.`);
    else if(imc < 17)
        return(`IMC ${imc.toFixed(2)}: Magreza moderada.`)
    else if(imc < 18.5)
        return (`IMC ${imc.toFixed(2)}: Magreza leve.`)
    else if(imc < 25)
        return (`IMC ${imc.toFixed(2)}: Peso ideal.`)
    else if(imc < 30)
        return (`IMC ${imc.toFixed(2)}: Sobrepeso.`)
    else if(imc < 35)
        return (`IMC ${imc.toFixed(2)}: Obesidade grau I.`)
    else if(imc < 40)
        return (`IMC ${imc.toFixed(2)}: Obesidade grau II.`)
    else
    return (`IMC ${imc.toFixed(2)}: Obesidade mórbida.`)

}

let height = parseFloat(process.argv[2]);
let weight = parseFloat(process.argv[3]);
if(height > 2)
    height/=100;

if (isNaN(height) || isNaN(weight) ||  height < 0.4 ||  (height >= 1 && height <= 40) ||  weight < 1.5) 
    console.log("Altura ou Peso inválido.");

else
    console.log(returnIMC(height,weight));