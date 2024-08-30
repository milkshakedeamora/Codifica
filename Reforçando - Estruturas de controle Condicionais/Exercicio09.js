/****************************************************************************************
*                                                                                       *
*  9 - Verifique a faixa etária de uma pessoa                                           *
*                                                                                       *
*  Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else        *
*  para determinar a faixa etária:                                                      *
*                                                                                       *
*  - Criança: 0 - 12 anos                                                               *
*  - Adolescente: 13 - 17 anos                                                          *
*  - Adulto: 18 - 59 anos                                                                *
*  - Idoso: 60 anos ou mais                                                              *
*                                                                                       *
*  Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem      *
*  específica para cada faixa etária.                                                   *
*                                                                                       *
****************************************************************************************/

function verificarFaixaEtaria(idade) {
    let faixaEtaria;

    if (idade >= 0 && idade <= 12) {
        faixaEtaria = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        faixaEtaria = "Adulto";
    } else if (idade >= 60) {
        faixaEtaria = "Idoso";
    } else {
        faixaEtaria = "Idade inválida";
    }

    console.log("Faixa etária: " + faixaEtaria);

    switch (faixaEtaria) {
        case "Criança":
            console.log("Você é uma criança, aproveite sua infância!");
            break;
        case "Adolescente":
            console.log("Você é um adolescente, está na fase de descobertas!");
            break;
        case "Adulto":
            console.log("Você é um adulto, a vida é cheia de responsabilidades!");
            break;
        case "Idoso":
            console.log("Você é um idoso, aproveite a sabedoria adquirida!");
            break;
        case "Idade inválida":
            console.log("Idade inválida");
            break;
        default:
            console.log("Não foi possível determinar a faixa etária.");
            break;
    }
}

let idade = parseInt(process.argv[2]);
verificarFaixaEtaria(idade);
