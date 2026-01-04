import { RecomendacaoTinta } from '../types/tinta';
import { TAMANHOS_LATA } from '../../../shared/constants/tintaConstants';

export class TintaCalculationService {
  static calcularQuantidadeTintaNecessaria(
    areaTotalParedes: number,
    areaPortas: number,
    areaJanelas: number
  ): RecomendacaoTinta {
    // Subtrair as aberturas da área total
    const areaAPintar = areaTotalParedes - areaPortas - areaJanelas;
    
    // 1 litro de tinta cobre 5 m²
    const litrosNecessarios = Math.ceil(areaAPintar / 5);

    return this.recomendarTamanhosLata(litrosNecessarios);
  }

  private static recomendarTamanhosLata(litrosNecessarios: number): RecomendacaoTinta {
    if (litrosNecessarios <= 0) {
      return {
        descricao: 'Nenhuma tinta é necessária.',
        quantidade: 0,
        tamanho: 'N/A',
      };
    }

    // Encontrar o tamanho mais apropriado
    for (const tamanho of TAMANHOS_LATA) {
      if (litrosNecessarios <= tamanho.litros) {
        return {
          descricao: `Compre uma lata de ${tamanho.litros} litros de tinta.`,
          quantidade: 1,
          tamanho: `${tamanho.litros}L`,
        };
      }
    }

    // Se necessário mais que a maior lata disponível
    const maiorLata = TAMANHOS_LATA[TAMANHOS_LATA.length - 1];
    const quantidadeLatas = Math.ceil(litrosNecessarios / maiorLata.litros);
    const pluralizacao = quantidadeLatas === 1 ? 'lata' : 'latas';

    return {
      descricao: `Compre ${quantidadeLatas} ${pluralizacao} de ${maiorLata.litros} litros de tinta.`,
      quantidade: quantidadeLatas,
      tamanho: `${maiorLata.litros}L`,
    };
  }
}
