import { useState, useCallback } from 'react';
import { Parede } from '../../../domains/parede';
import { ParedeValidationService } from '../../../domains/parede/services/paredeParedeValidationService';
import { LIMITE_ABERTURAS } from '../../../shared/constants/paredeConstants';
import { NUMERO_MAXIMO_PAREDES } from '../../../shared/constants/salaConstants';

export function useSala() {
  const [paredes, setParedes] = useState<Parede[]>([]);
  const [completo, setCompleto] = useState(false);

  const validarParedes = useCallback(
    (novasParedes: Parede[]): { valido: boolean; mensagem?: string } => {
      const { areaPortas, areaJanelas, areaTotalParedes } =
        ParedeValidationService.calcularAreaPorParedeComAberturas(novasParedes);

      const totalAberturas = areaPortas + areaJanelas;
      const limiteAberturas = areaTotalParedes * LIMITE_ABERTURAS;

      if (totalAberturas > limiteAberturas) {
        return {
          valido: false,
          mensagem:
            'O total de área das portas e janelas não poderá ocupar 50% da área de parede',
        };
      }

      return { valido: true };
    },
    []
  );

  const adicionarParede = useCallback(
    (novaParede: Parede): { sucesso: boolean; mensagem?: string } => {
      // Validar parede individual
      const validacao = ParedeValidationService.validarParede(novaParede);
      if (!validacao.isValido) {
        return { sucesso: false, mensagem: validacao.mensagem };
      }

      // Adicionar parede temporariamente
      const novasParedes = [...paredes, novaParede];

      // Validar paredes como conjunto
      const validacaoConjunto = validarParedes(novasParedes);
      if (!validacaoConjunto.valido) {
        return { sucesso: false, mensagem: validacaoConjunto.mensagem };
      }

      // Atualizar estado
      setParedes(novasParedes);

      // Verificar se atingiu o máximo
      if (novasParedes.length === NUMERO_MAXIMO_PAREDES) {
        setCompleto(true);
      }

      return { sucesso: true };
    },
    [paredes, validarParedes]
  );

  const reiniciarCalculo = useCallback(() => {
    setParedes([]);
    setCompleto(false);
  }, []);

  return {
    paredes,
    completo,
    adicionarParede,
    reiniciarCalculo,
  };
}
