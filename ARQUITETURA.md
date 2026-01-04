# Estrutura do Projeto - Arquitetura Orientada a Domínio

## 📁 Estrutura de Pastas

```
src/
├── domains/                    # Lógica de negócio por domínio
│   ├── parede/                # Domínio de Parede
│   │   ├── types/             # Interfaces e tipos TypeScript
│   │   │   └── parede.ts
│   │   ├── services/          # Lógica de validação e cálculos
│   │   │   └── paredeParedeValidationService.ts
│   │   └── index.ts           # Exports do domínio
│   │
│   ├── tinta/                 # Domínio de Tinta
│   │   ├── types/             # Interfaces e tipos
│   │   │   └── tinta.ts
│   │   ├── services/          # Serviços de cálculo
│   │   │   └── tintaCalculationService.ts
│   │   └── index.ts           # Exports do domínio
│   │
│   └── sala/                  # Domínio de Sala
│       ├── hooks/             # React Hooks para gerenciamento de estado
│       │   └── useSala.ts     # Hook principal de Sala
│       └── index.ts           # Exports do domínio
│
├── presentation/              # Camada de apresentação
│   ├── components/            # Componentes reutilizáveis
│   │   ├── PrintCampos.js
│   │   ├── Resultado.js
│   │   ├── DisplayMedidas.js
│   │   ├── DisplayResultado.js
│   │   └── index.ts
│   │
│   └── pages/                 # Páginas/Containers
│       └── InputCampos.js     # Página principal
│
├── shared/                    # Recursos compartilhados
│   ├── constants/             # Constantes da aplicação
│   │   ├── paredeConstants.ts
│   │   ├── tintaConstants.ts
│   │   └── salaConstants.ts
│   │
│   └── utils/                 # Utilitários gerais
│
├── App.js                     # Componente raiz
├── index.js                   # Entry point
├── main.jsx                   # Vite entry point (se usando Vite)
└── index.css                  # Estilos globais
```

## 🏗️ Padrões Arquiteturais

### 1. **Domínios (Domain-Driven Design)**

Cada domínio encapsula a lógica de negócio relacionada:

- **Parede**: Gerencia dados e validações de paredes
  - `ParedeValidationService`: Valida paredes individuais e conjuntos
  - `types/parede.ts`: Define interfaces `Parede` e `ParedeValidacao`

- **Tinta**: Gerencia cálculos de quantidade de tinta
  - `TintaCalculationService`: Calcula recomendações de tinta
  - `types/tinta.ts`: Define interface `RecomendacaoTinta`

- **Sala**: Gerencia o estado e fluxo de entrada de dados
  - `useSala`: Hook React que centraliza lógica de sala
  - Coordena validações entre domínios

### 2. **Camada de Apresentação**

Responsável apenas por renderizar UI:

- **Components**: Componentes sem lógica de negócio
  - `PrintCampos`: Renderiza conteúdo genérico
  - `Resultado`: Exibe resultado final
  - `DisplayMedidas`: Mostra medidas inseridas
  - `DisplayResultado`: Mostra recomendação de tinta

- **Pages**: Containers que conectam domínios com componentes
  - `InputCampos`: Página principal que orquestra tudo

### 3. **Recursos Compartilhados**

Constantes e utilitários usados por vários domínios:

- **Constants**: Valores fixos da aplicação
  - `paredeConstants.ts`: Regras de validação de parede
  - `tintaConstants.ts`: Tamanhos disponíveis de lata
  - `salaConstants.ts`: Instruções e limites

## 🔄 Fluxo de Dados

```
InputCampos (Page)
    ↓
useSala Hook
    ↓
ParedeValidationService ← Parede Domain
    ↓
TintaCalculationService ← Tinta Domain
    ↓
DisplayMedidas, DisplayResultado (Components)
```

## 💡 Benefícios da Arquitetura

1. **Separação de Responsabilidades**: Lógica de negócio desacoplada da UI
2. **Escalabilidade**: Fácil adicionar novos domínios
3. **Testabilidade**: Serviços podem ser testados isoladamente
4. **Reutilização**: Componentes e serviços independentes
5. **Manutenibilidade**: Código organizado por domínio
6. **Legibilidade**: Estrutura clara e intuitiva

## 📝 Como Adicionar um Novo Domínio

1. Criar pasta em `src/domains/novo-dominio/`
2. Criar `types/novo-dominio.ts` com interfaces
3. Criar `services/` com lógica de negócio
4. Criar `index.ts` com exports
5. Integrar com outros domínios conforme necessário
6. Usar em componentes de apresentação

## 🧪 Exemplo de Uso

```typescript
// Em um componente
import { useSala } from '@domains/sala';
import { DisplayMedidas } from '@presentation/components';

function MinhaPage() {
  const { paredes, completo, adicionarParede } = useSala();
  
  return (
    <>
      {paredes.length > 0 && <DisplayMedidas paredes={paredes} />}
    </>
  );
}
```
