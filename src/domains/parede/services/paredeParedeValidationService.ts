import { Parede, ParedeValidacao } from '../types/parede';
import { ALTURA_MINIMA_PORTA, AREA_MINIMA, AREA_MAXIMA } from '../../../shared/constants/paredeConstants';

export class ParedeValidationService {
  static validarParede(parede: Parede): ParedeValidacao {
    // Validar valores nulos ou indefinidos
    if (
      isNaN(parede.largura) ||
      isNaN(parede.altura) ||
      isNaN(parede.portas) ||
      isNaN(parede.janelas)
    ) {
      return {
        isValido: false,
        mensagem: 'Não deve haver valores nulos',
      };
    }

    // Validar altura com porta
    if (parede.portas > 0 && parede.altura <= ALTURA_MINIMA_PORTA) {
      return {
        isValido: false,
        mensagem:
          'A altura das paredes que possuem porta deve possuir pelo menos 30 centímetros de distância com relação a altura da porta',
      };
    }

    // Validar área da parede
    const area = parede.largura * parede.altura;
    if (area < AREA_MINIMA || area > AREA_MAXIMA) {
      return {
        isValido: false,
        mensagem: `Nenhuma parede pode ter menos de ${AREA_MINIMA} metro quadrado nem mais de ${AREA_MAXIMA} metros quadrados`,
      };
    }

    return { isValido: true };
  }

  static calcularAreaParede(parede: Parede): number {
    return parede.largura * parede.altura;
  }

  static calcularAreaPorParedeComAberturas(paredes: Parede[]): {
    areaPortas: number;
    areaJanelas: number;
    areaTotalParedes: number;
  } {
    const AREA_PORTA = 2.4;
    const AREA_JANELA = 1.52;

    const totalPortas = paredes.reduce((total, parede) => total + parede.portas, 0);
    const totalJanelas = paredes.reduce((total, parede) => total + parede.janelas, 0);
    const areaTotalParedes = paredes.reduce((total, parede) => total + this.calcularAreaParede(parede), 0);

    return {
      areaPortas: totalPortas * AREA_PORTA,
      areaJanelas: totalJanelas * AREA_JANELA,
      areaTotalParedes,
    };
  }
}
