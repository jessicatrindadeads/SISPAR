# SISPAR

Interface front-end para simular um sistema corporativo de solicitação e acompanhamento de reembolsos.

[![CI](https://github.com/jessicatrindadeads/SISPAR/actions/workflows/ci.yml/badge.svg)](https://github.com/jessicatrindadeads/SISPAR/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://sispar-jet.vercel.app)

## Demonstração

Acesse: [sispar-jet.vercel.app](https://sispar-jet.vercel.app)

O login é demonstrativo: informe qualquer e-mail em formato válido e uma senha para acessar. Esta versão não possui autenticação, back-end ou persistência de dados.

## Funcionalidades

- Login demonstrativo com formulário controlado e validação
- Dashboard com indicadores de solicitações
- Navegação entre páginas com React Router
- Cadastro e exclusão de solicitações de reembolso
- Cálculo automático dos totais faturado e de despesas
- Validação de campos obrigatórios
- Confirmações acessíveis para as ações da interface
- Envio e cancelamento demonstrativos
- Barra lateral recolhível
- Página para rotas não encontradas
- Layout responsivo para desktop, tablet e mobile

## Tecnologias

- React
- JavaScript
- React Router
- Sass e SCSS Modules
- Vite
- ESLint
- GitHub Actions
- Vercel

## Como executar

Pré-requisitos: Node.js 22 ou superior e npm.

```bash
git clone https://github.com/jessicatrindadeads/SISPAR.git
cd SISPAR
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
npm run preview
```

O fluxo de integração contínua executa lint e build em pull requests e atualizações da branch principal.

## Estrutura

```text
src/
├── assets/
├── components/
│   ├── login/
│   ├── navbar/
│   ├── pagina-nao-encontrada/
│   ├── reembolsos/
│   └── solicitacao/
├── App.jsx
├── global.scss
└── main.jsx
```

## Escopo

O SISPAR é um projeto educacional de front-end. Os dados, indicadores e solicitações exibidos são fictícios e permanecem apenas durante a sessão no navegador.

## Autora

Desenvolvido por [Jéssica Trindade](https://github.com/jessicatrindadeads).

[LinkedIn](https://www.linkedin.com/in/jessicatrindadeads/)
