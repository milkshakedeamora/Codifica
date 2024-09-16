/******************************************
 * 2. Verificando Propriedades             *
 * Objetivo: Crie um objeto livro com      *
 * propriedades titulo, autor,             *
 * anoPublicacao e genero. Verifique se a  *
 * propriedade editora existe no objeto    *
 * usando for in. Se não existir, adicione *
 * essa propriedade ao objeto.             *
 ******************************************/

const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: '',
    genero: ''
};
function possuiEditora(livro) {
    for (let propriedade in livro) 
        if (propriedade === 'editora') return true;
    return false;
}
if (!possuiEditora(livro)) livro.editora = '';