function verificaSeChuteEValido() {
  const numero = +chute

  if (chuteForinvalido(numero)) {
    elementoChute.innerHTML += '<div>VALOR INVÁLIDO</div>';
    return
  }

  if (numeroMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>O numero deve ser entre ${menorValor}-${maiorValor}!</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>VOCÊ ACERTOU!</h1>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    
    <button class="recomecar" id="jogar-novamente">Jogar Novamente</button>
    `

  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
  } else {
  elementoChute.innerHTML += `
  <div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
}
}

function chuteForinvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
})
