/********************************************************
 * Implemente um programa que recebe uma nota de 0 a 10 *
 * e classifica como "Aprovado", "Recuperação", ou      *
 * "Reprovado" utilizando if-else if.                   *
 ********************************************************/
function returnStatus(note)
{
    if(note < 0)
        console.log("Nota inválida.")
    else if(note < 4)
        console.log("Reprovado.")
    else if (note < 6)
        console.log("Recuperação.")
    else if(note <=10)
        console.log("Aprovado.")
    if(note > 10)
        console.log("Nota inválida.")

}

let note = parseInt(process.argv[2]);

if (isNaN(note)) 
    console.log("Nota Inválida.");
else
    returnStatus(note);