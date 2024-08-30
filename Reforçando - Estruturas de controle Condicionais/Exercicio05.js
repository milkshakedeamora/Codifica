/***********************************************************************************
*  5 - Verifique a categoria de um nadador                                         *                                                                             *
*  Escreva um programa que leia a idade de um nadador e use uma estrutura if/else  *
*  para determinar a categoria do nadador de acordo com a idade:                   *
*                                                                                  *
*  Infantil A: 5 - 7 anos                                                          *
*  Infantil B: 8 - 10 anos                                                         *
*  Juvenil A: 11 - 13 anos                                                         *
*  Juvenil B: 14 - 17 anos                                                         *
*  Adulto: 18 anos ou mais                                                         *
*                                                                                  *
***********************************************************************************/
let idade = parseInt(process.argv[2])
if (isNaN(idade) || idade < 5) 
    console.log("Número inválido.");
else if(idade < 8)
    console.log("Infantil A.");
else if(idade < 11)
    console.log("Infantil B.");
else if(idade < 14)
    console.log("Juvenil A.");
else if(idade < 18)
    console.log("Juvenil B.");
else
    console.log("Adulto.");
