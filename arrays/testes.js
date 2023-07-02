// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// jantarDeHoje = ['🍔', '🌭', '🍕']

// jantarDeHoje.pop()
// jantarDeHoje.pop()

// jantarDeHoje.push('🍳')
// jantarDeHoje.push('🥗')
// jantarDeHoje.push('🍏')

// console.log(jantarDeHoje)

// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// const nomes = ["Ana", "Juliana", "Leonardo"];
// const idades = [30, 35, 28];
// const faculdade = [false, true, true];

// const funcionarios = [nomes, idades, faculdade];

// const notas1 = [10, 6.5, 8 ,7.5]
// const notas2 = [9, 6, 6]
// const notas3 = [8.5, 9.5]

// const notasGerais = [notas1,notas2,notas3]

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }

// media = media/notasGerais.length

// console.log(media)

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
//   console.log(numeros[i]);
// }

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);