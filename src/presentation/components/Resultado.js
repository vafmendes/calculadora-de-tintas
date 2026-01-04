import React from 'react';

interface ResultadoProps {
  enviarValor: React.ReactNode;
}

export function Resultado({ enviarValor }: ResultadoProps): React.ReactElement {
  return <div>Resultado: {enviarValor}</div>;
}
