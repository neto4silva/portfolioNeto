import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
    const times = [
        'Elite Knight',
        'Elder Druid',
        'Royal Paladin',
        'Master Sorcerer'
    ]

    const [nick, setNome] = useState('')
    const [level, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [Vocacao, setTime] = useState('')

    const onSave = (event) => {
      event.preventDefault()
      props.aoPersonagemCadastrado({
        nick,
        // level,
        // imagem,
        // Vocacao,
      })
    }

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Personagem</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nick" 
          placeholder="Digite seu Nick" 
          valor={nick}
          aoAlterado={valor => setNome(valor)}
          />
        {/* <CampoTexto 
          obrigatorio={true} 
          label="Level" 
          placeholder="Digite seu Level" 
          valor={level}
          aoAlterado={valor => setCargo(valor)}
          />
        <CampoTexto 
          obrigatorio={true} 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Vocação" 
          itens= {times} 
          valor={Vocacao}
          aoAlterado={valor => setTime(valor)}
          /> */}
        <Botao>
          Consultar Personagem
        </Botao>
      </form>
    </section>
  )
}

export default Formulario
