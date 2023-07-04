import React, { useState } from 'react';
import './Calendario.css';

function Calendario() {
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [mesAtual, setMesAtual] = useState(0);

  const avancarMes = () => {
    setMesAtual((mesAtual + 1) % meses.length);
  };

  const voltarMes = () => {
    setMesAtual((mesAtual - 1 + meses.length) % meses.length);
  };

  const obterNumeroDiasMes = (mesIndex) => {
    const mes = mesIndex + 1;
    if (mes === 2) {
      // Verificar se é um ano bissexto
      const anoAtual = new Date().getFullYear();
      if ((anoAtual % 4 === 0 && anoAtual % 100 !== 0) || anoAtual % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else if ([4, 6, 9, 11].includes(mes)) {
      return 30;
    } else {
      return 31;
    }
  };

  const renderizarTabelaMes = (mesIndex) => {
    const numeroDias = obterNumeroDiasMes(mesIndex);
    const primeiroDiaSemana = new Date(new Date().getFullYear(), mesIndex, 1).getDay();
    const dias = Array.from({ length: numeroDias }, (_, index) => index + 1);

    const diasVazios = Array.from({ length: primeiroDiaSemana }, (_, index) => null);

    const semanas = [];
    let semanaAtual = [];
    diasVazios.forEach((dia) => {
      semanaAtual.push(<td key={`vazio-${semanaAtual.length}`} className="vazio"></td>);
    });

    dias.forEach((dia, index) => {
      if (semanaAtual.length === 7) {
        semanas.push(<tr key={`semana-${semanas.length}`}>{semanaAtual}</tr>);
        semanaAtual = [];
      }
      semanaAtual.push(<td key={`dia-${index}`} className="dia">{dia}</td>);
    });

    while (semanaAtual.length < 7) {
      semanaAtual.push(<td key={`vazio-${semanaAtual.length}`} className="vazio"></td>);
    }

    semanas.push(<tr key={`semana-${semanas.length}`}>{semanaAtual}</tr>);

    return (
      <div key={mesIndex} className="mes">
        <h2>{meses[mesIndex]}</h2>
        <table>
          <thead>
            <tr>
              {diasDaSemana.map((dia) => (
                <th key={dia}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semanas}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="calendario">
      <div className="botoes-mes">
        <button onClick={voltarMes}>&lt;</button>
        <h2 className="nome-mes">{meses[mesAtual]}</h2>
        <button onClick={avancarMes}>&gt;</button>
      </div>
      {renderizarTabelaMes(mesAtual)}
    </div>
  );
}

export default Calendario;