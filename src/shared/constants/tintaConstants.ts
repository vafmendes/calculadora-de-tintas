export interface TamanhosLata {
  litros: number;
  descricao: string;
}

export const TAMANHOS_LATA: TamanhosLata[] = [
  { litros: 0.5, descricao: '0,5 litros' },
  { litros: 2.5, descricao: '2,5 litros' },
  { litros: 3.6, descricao: '3,6 litros' },
  { litros: 18, descricao: '18 litros' },
];
