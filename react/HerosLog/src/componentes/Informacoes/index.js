import './Informacoes.css';

const Informacoes = (props) => {
  return (
    <section className='informacoes'>
      <form>
      <h3>{props.nome}</h3>
      </form>      
    </section>

  )
}

export default Informacoes