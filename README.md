# Digital Republic - Code Challenge

## Calculadora de tintas
### Descrição do desafio

- Desenvolver uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.


### Como executá-lo após clonar o repositório
```
npm run dev

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
### 🏠 Cenário Prático: Pintando a Casa

### **Situação Inicial**
O cliente quer pintar sua sala de estar e decidiu usar a aplicação para calcular quantos litros de tinta precisará comprar.

**Medidas da Sala:**
- **Parede 1 (Frente)**: 5m de largura × 2.8m de altura, 1 porta, 0 janelas
- **Parede 2 (Lateral Direita)**: 4m de largura × 2.8m de altura, 0 portas, 1 janela
- **Parede 3 (Fundo)**: 5m de largura × 2.8m de altura, 0 portas, 2 janelas
- **Parede 4 (Lateral Esquerda)**: 4m de largura × 2.8m de altura, 0 portas, 1 janela

### **Passos de Uso**

#### **Passo 1: Abrir a Aplicação**
```
✓ Vê a página com título "Calculadora de Tintas"
✓ Lê instrução: "Clique no botão abaixo e informe a medida de cada parede..."
✓ Clica no botão "+ Adicionar parede"
```

#### **Passo 2: Adicionar Primeira Parede**
```
Prompt 1: "Informe a largura da parede 1: (use '.' para decimais, não ',')"
Entrada: 5

Prompt 2: "Informe a altura da parede 1 (use '.' para decimais, não ','):"
Entrada: 2.8

Prompt 3: "Informe a quantidade de portas"
Entrada: 1

Prompt 4: "Informe a quantidade de janelas"
Entrada: 0

✓ Alert: "Parede 1 adicionada"
✓ Mensagem: "Para adicionar outra parede clique novamente"
✓ Botão continua disponível: "+ Adicionar parede"
```

#### **Passo 3: Adicionar Segunda Parede**
```
Prompt 1: "Informe a largura da parede 2:"
Entrada: 4

Prompt 2: "Informe a altura da parede 2:"
Entrada: 2.8

Prompt 3: "Informe a quantidade de portas"
Entrada: 0

Prompt 4: "Informe a quantidade de janelas"
Entrada: 1

✓ Alert: "Parede 2 adicionada"
✓ Mensagem: "Para adicionar outra parede clique novamente"
✓ Botão continua disponível: "+ Adicionar parede"
```

#### **Passo 4: Adicionar Terceira Parede**
```
Prompt 1: "Informe a largura da parede 3:"
Entrada: 5

Prompt 2: "Informe a altura da parede 3:"
Entrada: 2.8

Prompt 3: "Informe a quantidade de portas"
Entrada: 0

Prompt 4: "Informe a quantidade de janelas"
Entrada: 2

✓ Alert: "Parede 3 adicionada"
✓ Mensagem: "Para adicionar outra parede clique novamente"
✓ Botão continua disponível: "+ Adicionar parede"
```

#### **Passo 5: Adicionar Quarta Parede**
```
Prompt 1: "Informe a largura da parede 4:"
Entrada: 4

Prompt 2: "Informe a altura da parede 4:"
Entrada: 2.8

Prompt 3: "Informe a quantidade de portas"
Entrada: 0

Prompt 4: "Informe a quantidade de janelas"
Entrada: 1

✓ Alert: "Parede 4 adicionada"
✓ Sistema detecta: 4 paredes adicionadas (máximo atingido)
✓ Transição automática para tela de resultado
```

#### **Passo 6: Visualizar Resultado**
```
Seção 1 - MEDIDAS INSERIDAS:
┌─────────────────────────────────────────────┐
│ Parede 1: Largura - 5.00 | Altura - 2.80   │
│ Portas: 1 | Janelas: 0 | Área: 14m²         │
│                                               │
│ Parede 2: Largura - 4.00 | Altura - 2.80   │
│ Portas: 0 | Janelas: 1 | Área: 11.2m²       │
│                                               │
│ Parede 3: Largura - 5.00 | Altura - 2.80   │
│ Portas: 0 | Janelas: 2 | Área: 14m²         │
│                                               │
│ Parede 4: Largura - 4.00 | Altura - 2.80   │
│ Portas: 0 | Janelas: 1 | Área: 11.2m²       │
│                                               │
│ Total de portas: 1 e Total de janelas: 4    │
│ Área total: 50.4m²                          │
└─────────────────────────────────────────────┘

Seção 2 - RECOMENDAÇÃO:
┌─────────────────────────────────────────────┐
│ Resultado: Compre uma lata de 18 litros     │
│           de tinta.                          │
└─────────────────────────────────────────────┘

Mensagem: "Caso deseje fazer um novo cálculo, clique em 'Reiniciar'"
Botão disponível: "Reiniciar"
```





