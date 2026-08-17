# SISPAR

Interface web desenvolvida para simular um **sistema corporativo de solicitação e acompanhamento de reembolsos**.

O projeto foi desenvolvido com foco em **React, componentização, navegação entre páginas, organização de estilos com SCSS Modules e responsividade**.

> Este repositório representa, atualmente, a camada **front-end** da aplicação. Os dados iniciais exibidos são demonstrativos, e esta versão não possui autenticação nem persistência de dados no back-end.

---

## 🚀 Funcionalidades

- Tela de login com formulário controlado e validação básica
- Validação de e-mail antes do acesso ao dashboard
- Dashboard de reembolsos
- Indicadores visuais de solicitações
- Tela de solicitação de reembolso
- Formulário controlado com React
- Inclusão dinâmica de novas solicitações na tabela
- Exclusão de solicitações
- Cálculo automático do total faturado e do total de despesas
- Validação dos principais campos obrigatórios
- Mensagens de feedback para ações do formulário
- Navegação entre páginas com React Router
- Estrutura organizada em componentes
- Recursos básicos de acessibilidade com labels e atributos ARIA

---

## 🛠️ Tecnologias

- React
- JavaScript
- React Router DOM
- Sass / SCSS Modules
- HTML5
- CSS3
- Vite
- Git
- GitHub

---

## 📂 Estrutura do projeto

```bash
src/
├── assets/
├── components/
│   ├── login/
│   ├── navbar/
│   ├── reembolsos/
│   └── solicitacao/
│       ├── FormularioSolicitacao.jsx
│       ├── ResumoSolicitacao.jsx
│       ├── Solicitacao.jsx
│       ├── Solicitacao.module.scss
│       └── TabelaSolicitacoes.jsx
├── App.jsx
├── global.scss
└── main.jsx
```

---

## ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/jessicatrindadeads/SISPAR.git
```

Acesse a pasta do projeto:

```bash
cd SISPAR
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

---

## 📌 Status do projeto

Projeto **front-end** funcional e em evolução.

### Próximas melhorias planejadas

- Revisão da responsividade
- Refinamento visual das mensagens de feedback
- Testes da interface e dos principais fluxos
- Deploy da aplicação

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos de:

- Componentização em React
- Gerenciamento de estado com `useState`
- Derivação de valores com `useMemo`
- Manipulação de formulários controlados
- Validação de formulários
- Renderização condicional
- Renderização dinâmica de listas
- Comunicação entre componentes por props
- Navegação com React Router
- Estilização com SCSS Modules
- Acessibilidade básica em formulários
- Estruturação de interfaces corporativas
- Versionamento com Git e GitHub

---

## 👩‍💻 Autora

Desenvolvido por **Jessica Trindade**.

[LinkedIn](https://www.linkedin.com/in/jessicatrindadeads/) • [GitHub](https://github.com/jessicatrindadeads)
