import React from "react";
import { TintaCalculationService } from "../../domains/tinta";
import { Parede, ParedeValidationService } from "../../domains/parede";

interface DisplayResultadoProps {
  paredes: Parede[];
}

export function DisplayResultado({
  paredes,
}: DisplayResultadoProps): React.ReactElement {
  const { areaPortas, areaJanelas, areaTotalParedes } =
    ParedeValidationService.calcularAreaPorParedeComAberturas(paredes);

  const recomendacao =
    TintaCalculationService.calcularQuantidadeTintaNecessaria(
      areaTotalParedes,
      areaPortas,
      areaJanelas,
    );

  return (
    <div className="resultado-card">
      <div className="resultado-label">
        <svg
          className="resultado-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <rect
            x="4"
            y="4"
            width="5"
            height="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="4"
            width="5"
            height="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="16"
            y="4"
            width="5"
            height="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="4"
            y="10"
            width="5"
            height="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="10"
            width="5"
            height="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        Temeno
      </div>
      <div className="resultado-valor">{areaTotalParedes.toFixed(2)} m²</div>

      <div className="resultado-divisor"></div>

      <div className="resultado-detalhes">
        <div className="detalhe-item">
          <div className="detalhe-icon">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 3h12v12h-12z" />
              <line x1="3" y1="15" x2="21" y2="15" />
              <line x1="3" y1="21" x2="21" y2="21" />
            </svg>
          </div>
          <div className="detalhe-numero">
            {paredes.reduce((total, p) => total + p.portas, 0)}
          </div>
          <div className="detalhe-label">Porta</div>
        </div>
        <div className="detalhe-item">
          <div className="detalhe-icon">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="14" />
              <path d="M3 17h18" />
              <line x1="9" y1="3" x2="9" y2="17" />
              <line x1="15" y1="3" x2="15" y2="17" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div className="detalhe-numero">
            {paredes.reduce((total, p) => total + p.janelas, 0)}
          </div>
          <div className="detalhe-label">Janelas</div>
        </div>
      </div>

      <div className="resultado-divisor"></div>

      <div className="resultado-imagem">
        <svg viewBox="0 0 100 100" width="90" height="90">
          {/* Alça do balde */}
          <path
            d="M 25 20 Q 25 5, 50 5 Q 75 5, 75 20"
            fill="none"
            stroke="#c0c0c0"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Borda superior do balde */}
          <ellipse
            cx="50"
            cy="20"
            rx="25"
            ry="6"
            fill="none"
            stroke="#a0a0a0"
            strokeWidth="2"
          />

          {/* Corpo do balde */}
          <path
            d="M 25 20 L 22 75 Q 22 80, 28 82 L 72 82 Q 78 80, 78 75 L 75 20"
            fill="#e8e8e8"
            stroke="#808080"
            strokeWidth="2"
          />

          {/* Tinta dentro do balde */}
          <defs>
            <linearGradient
              id="tintaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#ff8c00", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ff6b00", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M 27 35 L 25 70 Q 25 76, 30 78 L 70 78 Q 75 76, 75 70 L 73 35"
            fill="url(#tintaGradient)"
            opacity="0.9"
          />

          {/* Brilho na tinta */}
          <ellipse
            cx="45"
            cy="40"
            rx="12"
            ry="8"
            fill="#ffb366"
            opacity="0.4"
          />

          {/* Sombra no balde */}
          <path
            d="M 26 25 L 24 75"
            stroke="#606060"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
      <p className="resultado-descricao">{recomendacao.descricao}</p>
    </div>
  );
}
