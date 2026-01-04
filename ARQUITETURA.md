# Estrutura do Projeto - Arquitetura Orientada a Domínio com Vite + TypeScript

## 📋 Stack Tecnológico

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Linguagem**: TypeScript 5.3.0
- **Tipagem React**: @types/react 18.3.27 e @types/react-dom 18.3.7
- **Plugin React**: @vitejs/plugin-react 4.2.0

## 📁 Estrutura de Pastas

```
calculadora-de-tintas/
├── public/                    # Arquivos estáticos públicos
├── src/
│   ├── domains/              # Lógica de negócio por domínio
│   │   ├── parede/           # Domínio de Parede
│   │   │   ├── types/        # Interfaces e tipos TypeScript
│   │   │   │   └── parede.ts # Interface Parede, ParedeValidacao
│   │   │   ├── services/     # Lógica de validação e cálculos
│   │   │   │   └── paredeParedeValidationService.ts
│   │   │   └── index.ts      # Exports do domínio
│   │   │
│   │   ├── tinta/            # Domínio de Tinta
│   │   │   ├── types/        # Interfaces e tipos
│   │   │   │   └── tinta.ts  # Interface RecomendacaoTinta
│   │   │   ├── services/     # Serviços de cálculo
│   │   │   │   └── tintaCalculationService.ts
│   │   │   └── index.ts      # Exports do domínio
│   │   │
│   │   └── sala/             # Domínio de Sala
│   │       ├── hooks/        # React Hooks para gerenciamento de estado
│   │       │   └── useSala.ts # Hook principal - gerencia paredes
│   │       └── index.ts      # Exports do domínio
│   │
│   ├── presentation/         # Camada de apresentação
│   │   ├── components/       # Componentes reutilizáveis (sem lógica)
│   │   │   ├── PrintCampos.tsx
│   │   │   ├── Resultado.tsx
│   │   │   ├── DisplayMedidas.tsx
│   │   │   ├── DisplayResultado.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── pages/            # Páginas/Containers (conectam domínios com UI)
│   │       └── InputCampos.tsx # Página principal
│   │
│   ├── shared/               # Recursos compartilhados
│   │   ├──constants/        # Constantes da aplicação
│   │      ├── paredeConstants.ts    # Validações e limites de parede
│   │      ├── tintaConstants.ts     # Tamanhos de lata disponíveis
│   │      └── salaConstants.ts      # Instruções e limites
│   │   
│   │   
│   │
│   ├── styles/               # Estilos compartilhados
│   │   └── style.css
│   │
│   ├── App.tsx               # Componente raiz da aplicação
│   ├── main.tsx              # Entry point do React (Vite)
│   └── index.css             # Estilos globais
│
├── index.html                # Arquivo HTML raiz (Vite)
├── vite.config.ts            # Configuração do Vite
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.node.json        # Configuração TS para Vite config
├── package.json              # Dependências e scripts
├── .gitignore                # Arquivo git ignorar
├── ARQUITETURA.md            # Documentação da arquitetura (este arquivo)
└── README.md                 # Documentação geral do projeto
```

## 🏗️ Padrões Arquiteturais

### 1. **Domain-Driven Design (DDD)**

Cada domínio encapsula a lógica de negócio relacionada, seguindo o padrão DDD:

#### **Domínio de Parede**
- **Responsabilidade**: Gerenciar dados, validações e cálculos relacionados a paredes
- **Arquivo Principal**: `src/domains/parede/services/paredeParedeValidationService.ts`
- **Métodos Principais**:
  - `validarParede(parede)` - Valida uma parede individual
  - `calcularAreaParede(parede)` - Calcula área de uma parede
  - `calcularAreaPorParedeComAberturas(paredes)` - Calcula áreas com aberturas (portas/janelas)
- **Validações Implementadas**:
  - Valores não podem ser NaN
  - Altura mínima com porta: 2.2m
  - Área mínima: 1m²
  - Área máxima: 50m²
- **Constantes**: `src/shared/constants/paredeConstants.ts`
  - `ALTURA_MINIMA_PORTA`, `AREA_MINIMA`, `AREA_MAXIMA`
  - `AREA_PORTA` (2.4m²), `AREA_JANELA` (1.52m²)

#### **Domínio de Tinta**
- **Responsabilidade**: Calcular quantidade de tinta necessária e recomendar tamanho de lata
- **Arquivo Principal**: `src/domains/tinta/services/tintaCalculationService.ts`
- **Métodos Principais**:
  - `calcularQuantidadeTintaNecessaria(areaTotalParedes, areaPortas, areaJanelas)` - Calcula litros e recomenda lata
  - `recomendarTamanhosLata(litrosNecessarios)` - Recomenda tamanho apropriado
- **Lógica de Cálculo**: 1 litro cobre 5m²
- **Tamanhos de Lata Disponíveis**: 0.5L, 2.5L, 3.6L, 18L
- **Constantes**: `src/shared/constants/tintaConstants.ts`

#### **Domínio de Sala**
- **Responsabilidade**: Orquestrar fluxo de entrada de dados e validação de paredes
- **Arquivo Principal**: `src/domains/sala/hooks/useSala.ts`
- **Hook React**: `useSala()`
- **Funcionalidades**:
  - `adicionarParede(parede)` - Adiciona parede com validações em cascata
  - `reiniciarCalculo()` - Reinicia o processo de cálculo
  - `paredes` - Estado das paredes adicionadas
  - `completo` - Estado que indica se cálculo foi completado
- **Validações**:
  - Valida parede individual via ParedeValidationService
  - Valida conjunto de paredes (limite de aberturas)
  - Máximo de 3 paredes (NUMERO_MAXIMO_PAREDES)

### 2. **Separação de Responsabilidades**

**Domínios** (Lógica de Negócio - `src/domains/`)
- Contêm toda a lógica de validação e cálculo
- Completamente independentes de React e UI
- Facilmente testáveis isoladamente
- Exportam serviços (classes estáticas) e tipos (interfaces)
- Não importam componentes React

**Presentation** (Camada de Apresentação - `src/presentation/`)
- **Components** (`components/`): Componentes reutilizáveis sem lógica de negócio
  - `PrintCampos.tsx` - Renderiza conteúdo genérico
  - `Resultado.tsx` - Exibe resultado final
  - `DisplayMedidas.tsx` - Exibe medidas inseridas
  - `DisplayResultado.tsx` - Exibe recomendação de tinta
  - Todos com tipagem de props via interfaces TypeScript
  
- **Pages** (`pages/`): Containers/Páginas que orquestram tudo
  - `InputCampos.tsx` - Página principal
  - Conecta domínios (useSala hook) com componentes
  - Responsável apenas por fluxo de UI e chamadas a domínios

**Shared** (Recursos Compartilhados - `src/shared/`)
- **Constants** (`constants/`): Constantes usadas por múltiplos domínios
  - `paredeConstants.ts` - Valores de validação de parede
  - `tintaConstants.ts` - Tamanhos de lata e tipos associados
  - `salaConstants.ts` - Instruções e limites globais
- **Utils** (`utils/`): Utilitários genéricos (preparado para expansão)

### 3. **TypeScript e Tipagem**

- **Strict Mode** habilitado em `tsconfig.json`
- Todas as funções com tipos de retorno explícitos
- Interfaces para todas as estruturas de dados
- Props de componentes tipadas via interfaces
- Non-null assertion (!) apenas quando apropriado

### 4. **Integração com Vite**

- **Configuração**: `vite.config.ts` com plugin React
- **Build**: Otimizado para produção
- **Dev**: Hot Module Replacement (HMR) para desenvolvimento rápido
- **Entry Point**: `src/main.tsx` (ao invés de index.js)
- **HTML Raiz**: `index.html` na raiz do projeto


## 🔄 Fluxo de Dados

```
InputCampos.tsx (Page)
    ↓
    ├─ useSala() Hook (Domínio Sala)
    │   ↓
    │   ├─ ParedeValidationService.validarParede()
    │   └─ ParedeValidationService.calcularAreaPorParedeComAberturas()
    │       (Domínio Parede)
    │
    ├─ TintaCalculationService.calcularQuantidadeTintaNecessaria()
    │   (Domínio Tinta)
    │
    └─ Renderização de Componentes
        ├─ DisplayMedidas (Component)
        └─ DisplayResultado (Component)
```

## ✨ Scripts Disponíveis

```json
{
  "dev": "vite",           // Inicia servidor de desenvolvimento
  "build": "vite build",   // Cria build otimizado para produção
  "preview": "vite preview" // Visualiza build localmente
}
```

## 💡 Benefícios da Arquitetura

1. **Separação de Responsabilidades**: Lógica de negócio completamente desacoplada da UI
2. **Escalabilidade**: Fácil adicionar novos domínios sem afetar existentes
3. **Testabilidade**: Serviços de domínio testáveis isoladamente (sem mocks React)
4. **Reutilização**: Componentes e serviços podem ser usados em diferentes contextos
5. **Manutenibilidade**: Código organizado por domínio de negócio
6. **Legibilidade**: Estrutura clara e intuitiva, fácil de navegar
7. **Type Safety**: TypeScript garante tipos em tempo de compilação
8. **Performance**: Vite oferece build e dev server muito rápido

## 📊 Contato entre Domínios

```
Sala ──┐
       └─→ Parede (import/uso)
       └─→ Tinta (via Page/Presentation)
       
Parede (independente)
Tinta ──→ Constants (paredeConstants para cálculos)
```

O domínio **Sala** orquestra os outros domínios mas não cria dependências circulares.

## 📝 Como Adicionar um Novo Domínio

1. Criar pasta em `src/domains/novo-dominio/`
2. Criar subpastas conforme necessário:
   - `types/novo-dominio.ts` - Definir interfaces
   - `services/` - Implementar lógica de negócio
   - `hooks/` (se precisar de gerenciamento de estado)
3. Criar `index.ts` exportando tipos e serviços
4. Adicionar constantes em `src/shared/constants/` se necessário
5. Integrar em `src/presentation/pages/` conforme necessário
6. Não importar React ou componentes na lógica de domínio
