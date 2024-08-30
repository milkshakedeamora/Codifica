/***********************************************************************
 * Leia três valores para os lados de um triângulo: A, B e C.          *
 * Verifique se os lados fornecidos formam realmente um triângulo.     *
 * Caso formem, indique o tipo de triângulo:                           *
 *                                                                     *
 * - Triângulo Isósceles: possui dois lados iguais (A=B ou A=C ou B=C) *
 * - Triângulo Escaleno: possui todos os lados diferentes (A<>B e B<>C)*
 * - Triângulo Equilátero: possui todos os lados iguais (A=B e B=C)    *
 *                                                                     *
 * Para verificar se os lados fornecidos formam um triângulo:          *
 * A < B + C e B < A + C e C < A + B                                   *
 **********************************************************************/
function returnTriangle(a,b,c)
{
    if (a == b == c!=0)
        return("Equilátero");
    if(a + b <= c ||  b + c <= a ||  a + c <= b)
        return("Não é um triangulo");
    if(a != b && b!= c && a != c)
        return("Isósceles");
    if(a== b || b == c ||  a == c)
        return("Escaleno");
}
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);
if (isNaN(a) || isNaN(b) ||isNaN(b)) 
    console.log("Um ou mais dos lados é inválido.");

else
    console.log(returnTriangle(a,b,c));