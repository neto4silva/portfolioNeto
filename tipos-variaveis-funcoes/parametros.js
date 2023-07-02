function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5,7));

// parametros x argumentos

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(2, 6)));

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
cumprimentaPessoa('Helena')