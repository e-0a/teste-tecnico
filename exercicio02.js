let num = 314;
let fibPrev = 0;
let fibAtual = 1;

while (fibAtual < num) {
    let fibProx = fibPrev + fibAtual;
    fibPrev = fibAtual;
    fibAtual = fibProx;
}

if (fibAtual === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
};