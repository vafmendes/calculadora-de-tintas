import React from 'react';
import { useSala } from '../../domains/sala';
import { Parede } from '../../domains/parede';
import { DisplayMedidas, DisplayResultado } from '../components';
import '../../../styles/style.css';
import {
  INSTRUCOES_LARGURA,
  INSTRUCOES_ALTURA,
  INSTRUCOES_PORTAS,
  INSTRUCOES_JANELAS,
} from '../../shared/constants/salaConstants';

export function InputCampos(): React.ReactElement {
  const { paredes, completo, adicionarParede, reiniciarCalculo } = useSala();

  const solicitarMedidasParede = (indexParede: number): Parede | null => {
    const larguraStr = prompt(
      `${INSTRUCOES_LARGURA} ${indexParede}:`
    );
    const alturaStr = prompt(
      `${INSTRUCOES_ALTURA} ${indexParede}:`
    );
    const portasStr = prompt(
      `${INSTRUCOES_PORTAS} ${indexParede}:`
    );
    const janelasStr = prompt(
      `${INSTRUCOES_JANELAS} ${indexParede}:`
    );

    if (!larguraStr || !alturaStr || !portasStr || !janelasStr) {
      return null;
    }

    return {
      largura: parseFloat(larguraStr),
      altura: parseFloat(alturaStr),
      portas: parseInt(portasStr, 10),
      janelas: parseInt(janelasStr, 10),
    };
  };

  const handleAdicionarParede = (): void => {
    const novaParede = solicitarMedidasParede(paredes.length + 1);
    if (!novaParede) {
      return;
    }

    const resultado = adicionarParede(novaParede);
    if (resultado.sucesso) {
      alert(`Parede ${paredes.length + 1} adicionada`);
    } else {
      alert(resultado.mensagem);
    }
  };

  const handleReiniciar = (): void => {
    reiniciarCalculo();
  };

  return (
    <div style={{ display: 'block' }}>
      <p>
        Clique no botão abaixo e informe a medida de cada parede de sua sala
        para calcular a quantidade de tinta necessária para pintar. Incluindo
        quantidade de janelas e portas que cada parede possui.
      </p>
      {!completo && paredes.length > 0 && (
        <h5>Para adicionar outra parede clique novamente</h5>
      )}
      {!completo && (
        <button onClick={handleAdicionarParede}>+ Adicionar parede</button>
      )}
      {completo && <DisplayMedidas paredes={paredes} />}
      {completo && <DisplayResultado paredes={paredes} />}
      {completo && (
        <h5>Caso deseje fazer um novo cálculo, clique em 'Reiniciar'</h5>
      )}
      {completo && <button onClick={handleReiniciar}>Reiniciar</button>}
    </div>
  );
}
