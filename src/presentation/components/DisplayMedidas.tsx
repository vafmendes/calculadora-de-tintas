import React from 'react';
import { Parede } from '../../domains/parede';

interface DisplayMedidasProps {
  paredes: Parede[];
}

export function DisplayMedidas({ paredes }: DisplayMedidasProps): React.ReactElement {
  const totalPortas = paredes.reduce((total, p) => total + p.portas, 0);
  const totalJanelas = paredes.reduce((total, p) => total + p.janelas, 0);
  const areaTotalParedes = paredes.reduce(
    (total, p) => total + p.largura * p.altura,
    0
  );

  return (
    <div style={{ margin: '10px 30px' }}>
      {paredes.map((parede, index) => {
        const areaParede = parede.largura * parede.altura;
        const areaFormatada =
          areaParede.toString().length >= 5
            ? areaParede.toFixed(2)
            : areaParede;

        return (
          <p
            key={index}
            style={{ marginBottom: '10px', paddingRight: '35px' }}
          >
            Parede {index + 1}: Largura - {parede.largura.toFixed(2)} | Altura -{' '}
            {parede.altura.toFixed(2)} | Portas: {parede.portas} | Janelas:{' '}
            {parede.janelas} | Área: {areaFormatada}m²
          </p>
        );
      })}
      <div style={{ marginTop: '10px' }}>
        <p>Total de portas: {totalPortas} e Total de janelas: {totalJanelas}</p>
        <p>Área total: {areaTotalParedes.toFixed(2)} m²</p>
      </div>
    </div>
  );
}
