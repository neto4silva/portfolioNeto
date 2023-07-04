import Banner from './componentes/Header';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Informacoes from './componentes/Informacoes';

function App() {

  const [personagens, setPersonagems] = useState('')

  const aoNovoPersonagemCadastrado = (personagem) => {
    console.log(personagem)
    setPersonagems([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoPersonagemCadastrado={personagem => aoNovoPersonagemCadastrado(personagem)}/>
      <Informacoes nome="personagem"/>
    </div>
  );
}

export default App;
