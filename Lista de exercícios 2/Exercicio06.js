/******************************************
 * 6. Filtrando Arrays de Objetos          *
 * Objetivo: Crie um array de objetos      *
 * funcionarios, onde cada objeto contém   *
 * informações como nome, cargo, e salario.*
 * Use for of para filtrar e exibir apenas *
 * os funcionários cujo salário seja maior *
 * que um valor específico.                *
 ******************************************/

const funcionarios = [
    { nome: 'Breno', cargo: "Estagiario Cobol", salario: 3200 },
    { nome: 'Isaac', cargo: "Dev Backend Javascript Jr", salario: 2900 },
    { nome: 'Luany', cargo: "Dev Fullstack Python Sr", salario: 7800 },
    { nome: 'Thiago', cargo: "Dev Frontend React Jr", salario: 2700 }
];

function filtrarFuncionario(funcionarios, salarioMinimo) {
    const funcionariosFiltrados = [];

    for (const funcionario of funcionarios) 
        if (funcionario.salario > salarioMinimo) funcionariosFiltrados.push(funcionario);
    return funcionariosFiltrados;
}

let valor = parseInt(process.argv[2]);

if (isNaN(valor)) {
    console.log("Valor Inválido.");
} else {
    console.log(filtrarFuncionario(funcionarios, valor));
}