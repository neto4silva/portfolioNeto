function apresentar(nome){
    return `meu nome é ${nome}`;
}

console.log(apresentar('Teste'));

const apresentarArrow = nome => `meu nome é ${nome}`;

console.log(apresentarArrow('Teste'))

// arrow com + de 1 linha

const somarNumeros = (num1, num2) =>  {
    if (num1 > 10 || num2 > 10) {
        return 'somente numeros menores que 10'
    } else {
        return num1 + num2
    }
}

console.log(somarNumeros(4, 6));