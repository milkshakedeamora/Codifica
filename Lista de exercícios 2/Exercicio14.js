/*********************************************
 * 14. Manipulando Objetos Complexos         *
 * Objetivo: Crie um objeto empresa com      *
 * uma propriedade departamentos, que é um   *
 * array de objetos. Cada departamento tem   *
 * um nome e uma lista de funcionarios.      *
 * Use for in e for of para iterar sobre     *
 * os departamentos e seus funcionários,     *
 * exibindo o nome de cada funcionário       *
 * junto com o departamento ao qual pertence.*
 *********************************************/
const empresa = {
    departamentos: [

       {nome: 'Financeiro' , funcionarios : [
        { nome: 'Kaik', cargo: "Estagiario", salario: 2100 },
        { nome: 'Tuany', cargo: "Contadora", salario: 1800 },
        { nome: 'Thiago', cargo: "Contador", salario: 2700 }
    ]}, 

       {nome: 'Desenvolvimento/TI', funcionarios : [
        { nome: 'Breno', cargo: "Estagiario Cobol", salario: 3200 },
        { nome: 'Isaac', cargo: "Dev Backend Javascript Jr", salario: 2900 },
        { nome: 'Luany', cargo: "Dev Fullstack Python Sr", salario: 7800 },
        { nome: 'Thiago', cargo: "Dev Frontend React Jr", salario: 2700 }
    ]},
       {nome: 'RH', funcionarios : [
        { nome: 'Bruna', cargo: "Estagiaria", salario: 980 },
        { nome: 'Bruno', cargo: "Gerente", salario: 3800 }
    ]} 
    ]
    
};

for (const departamento in empresa.departamentos) {
    for (const funcionario of empresa.departamentos[departamento].funcionarios) {
        console.log(`${funcionario.cargo} ${funcionario.nome} - Departamento: ${empresa.departamentos[departamento].nome}`);
    }
}