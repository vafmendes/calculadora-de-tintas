import React from 'react';
import { TintaCalculationService } from '../../domains/tinta';
import { Parede, ParedeValidationService } from '../../domains/parede';

interface DisplayResultadoProps {
  paredes: Parede[];
}

export function DisplayResultado({
  paredes,
}: DisplayResultadoProps): React.ReactElement {
  const { areaPortas, areaJanelas, areaTotalParedes } =
    ParedeValidationService.calcularAreaPorParedeComAberturas(paredes);

  const recomendacao = TintaCalculationService.calcularQuantidadeTintaNecessaria(
    areaTotalParedes,
    areaPortas,
    areaJanelas
  );

  return <p>{recomendacao.descricao}</p>;
}
