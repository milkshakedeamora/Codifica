/*********************************************************************************
* Escreva um programa que gera e imprime os primeiros 10 números da sequência de *
* Fibonacci utilizando um loop for.                                              *
 ********************************************************************************/
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

