const texto1 = 'Olá, Mundo! ';
const senha = 'Senha123%$';
const stringDeNumeros = '12345123';

const citacao = 'Ele disse "Oi!"';

console.log(citacao)

// concatenação

const frase = texto1 + citacao;

console.log(frase);


// Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


// comparação de strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// template string ou template literal

