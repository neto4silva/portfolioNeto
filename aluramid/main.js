function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {    
      elemento.play();   
  } else {
    alert('Elemento não encontrado');
  }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

for (let i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];
  const instrumentoTocado = tecla.classList[1];
  const idAudio = `#som_${instrumentoTocado}` ;

  tecla.onclick = function() {
    tocaSom(idAudio);
  }  

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa');
    }    
  }

  tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
  }
}
