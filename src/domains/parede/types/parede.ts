export interface Parede {
  largura: number;
  altura: number;
  portas: number;
  janelas: number;
}

export interface ParedeValidacao {
  isValido: boolean;
  mensagem?: string;
}
