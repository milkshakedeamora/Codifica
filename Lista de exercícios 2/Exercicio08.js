/******************************************
 * 8. Criando Novos Arrays a Partir de     *
 * Objetos                                 *
 * Objetivo: Crie um array de objetos      *
 * filmes, onde cada filme tem titulo,     *
 * diretor, e anoLancamento. Use forEach   *
 * para criar um novo array contendo apenas*
 * os títulos dos filmes.                  *
 ******************************************/

const filmes = [
    { titulo: 'O Rei Leão', diretor: 'Jon Favreau', anoLancamento: 2019 },
    { titulo: 'O Rei Leão', diretor: 'Rob Minkoff, Roger Allers', anoLancamento: 1994 },
    { titulo: 'O Rei Leão 2: O Reino de Simba', diretor: 'Darrell Rooney', anoLancamento: 1998 },
    { titulo: 'O Rei Leão 3 - Hakuna Matata', diretor: 'Bradley Raymond', anoLancamento: 2004 }
];

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});
console.log(titulosFilmes);