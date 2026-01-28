import React from "react";
import { Parede } from "../../domains/parede";

interface DisplayMedidasProps {
  paredes: Parede[];
}

export function DisplayMedidas({
  paredes,
}: DisplayMedidasProps): React.ReactElement {
  const totalPortas = paredes.reduce((total, p) => total + p.portas, 0);
  const totalJanelas = paredes.reduce((total, p) => total + p.janelas, 0);
  const areaTotalParedes = paredes.reduce(
    (total, p) => total + p.largura * p.altura,
    0,
  );

  return (
    <div className="medidas-container">
      {paredes.map((parede, index) => {
        const areaParede = parede.largura * parede.altura;
        const areaFormatada =
          areaParede.toString().length >= 5
            ? areaParede.toFixed(2)
            : areaParede;

        return (
          <p key={index} className="parede-info">
            <span className="parede-label">Parede {index + 1}:</span> Largura:{" "}
            <strong>{parede.largura.toFixed(2)} m</strong> | Altura:{" "}
            <strong>{parede.altura.toFixed(2)} m</strong> | Portas:{" "}
            {parede.portas} | Janelas: {parede.janelas} | Área:{" "}
            <strong>{areaFormatada}m²</strong>
          </p>
        );
      })}
      <div className="totais-info">
        <p>
          <strong>Total de portas:</strong> {totalPortas} |{" "}
          <strong>Total de janelas:</strong> {totalJanelas}
        </p>
        <p>
          <strong>Área total:</strong> {areaTotalParedes.toFixed(2)} m²
        </p>
      </div>
    </div>
  );
}
