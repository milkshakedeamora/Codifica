/**********************************************************************
 * 15. Filtrando e Somando Valores                                    *
 * Objetivo: Calcular o saldo final de um array de transações,        *
 * onde cada transação possui um tipo (entrada ou saída) e um valor.  *
 * Utilizaremos forEach para somar as entradas e subtrair as saídas.  *
 *********************************************************************/

const transacoes = [
    { tipo: 'entrada', valor: 800 },
    { tipo: 'entrada', valor: 4664 },
    { tipo: 'saída', valor: 1200 },
    { tipo: 'entrada', valor: 4000 },
    { tipo: 'saída', valor: 285 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') saldoFinal += transacao.valor;
    else if (transacao.tipo === 'saída') saldoFinal -= transacao.valor; 
});
console.log(saldoFinal);