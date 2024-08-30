/****************************************************************************************
*                                                                                       *
*  7 - Calcule o valor de uma expressão matemática simples                              *
*                                                                                       *
*  Escreva um programa que leia dois números e um operador (+, -, *, /) e use           *
*  uma estrutura switch para calcular o resultado da operação.                          *
*  Imprima o resultado.                                                                 *
*                                                                                       *
*  Dica: Utilize os operadores aritméticos em cada caso do switch.                      *
*                                                                                       *
****************************************************************************************/

let num1 = parseFloat(process.argv[2])
let op = process.argv[3]
let num2 = parseFloat(process.argv[4])

if(isNaN(num1) || isNaN(num2))
    console.log("Número Inválido.")
switch(op)
{
    case '+':
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1*num2}`)
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        break;
    default:
        console.log("Operador Inválido.")
        break;
}