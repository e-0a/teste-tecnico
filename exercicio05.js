let minhaString = 'Olá, mundo!';
let stringInvertida = '';

for (let i = minhaString.length - 1; i >= 0; i--) {

    stringInvertida += minhaString[i];
};

console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertida}`);