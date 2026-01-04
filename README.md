# Digital Republic - Code Challenge

## Calculadora de tintas
### Descrição do desafio

- Desenvolver uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.

### Como executá-lo após clonar o repositório
```
npm start

```
Obs: Antes de executar o 'npm run dev' é necessário instalar a pasta de dependência 'node_modules'
usando este comando dentro do terminal
```
npm install

```
### Tecnologias utilizadas
 - React.js
 - Vite
 - Typescript
 - Node.js
 - Javascript
 - HTML
 - CSS

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
└── README.md                 # Documentação geral do projeto
```

 ### IDE utilizada para desenvolver a aplicação
  - Visual Studio Code (vscode)

### 📚 Referências e Padrões

- **Domain-Driven Design**: Lógica organizada por domínio de negócio
- **Separation of Concerns**: Domínios separados de apresentação
- **Hooks Pattern**: Reutilização de lógica de estado com React Hooks
- **Service Layer**: Encapsulamento de lógica em serviços estáticos
- **Component Composition**: Componentes pequenos e reutilizáveis
- **TypeScript Strict Mode**: Type safety em tempo de compilação
- **Vite**: Build tool moderno e rápido

### Template da aplicação

***
<span align="center">
  <img src="https://github.com/vafmendes/calculadora-de-tintas/assets/106504029/d15a924d-f70a-4cd3-bfdc-4dc176a24e45" width="700px"/>
</span>


***




