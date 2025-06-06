# Murabei test

## Description

Esse e o teste para Desenvolvedor FullStack na Murabei Data Science, usando Docker, Python, Nextjs and sqlite3.

O objetivo deste teste e avaliar a capcidade do desenvolvedor em criar uma aplicacao Frontend e integra-la em uma API Python. Toda a aplicacao e mantida em containers Docker, e roda usando docker compose. Esta e a mesma arquitetura usada em todos os projetos internos da Murabei.

## Instrucoes

O repositorio e dividido em 3 pastas:

- \_docker-compose
- backend
- frontend

Na pasta **_\_docker-compose_**, estao os arquivos responsaveis por subir todas as imagens Docker. Um **docker-compose.yml**, que possui as informacoes de quais containers e imagens devem subir; um script **docker-up.bash** que sobe os containers baseado no arquivo **docker-compose.yml**; e um arquivo **docker.log**, que armazena todos os logs da aplicacao.

Ja na pasta **_backend_** esta a API de livros, em Python Flask. Esta API tem uma gama de operacoes basicas, como listagem de livros, criacao, busca por autor e titulo. Esta API ja esta pre-pronta, mas pode ser alterada de acordo com a sua necessidade, sem problemas.

Esta pasta possui um script **build.bash**, que builda a imagem docker a ser utilizada no **docker-compose.yml**.

E, a pasta **_frontend_**, onde devem ser colocados codigos do FE. Aqui na Murabei, utilizamos o NextJS como framework de React, logo, seu FE deve ser desenolvido em NextJS, pelo menos, na versao 13, que ja possui **_Server Components_** e **_Server Actions_**.

## Inicializacao

Clone o repositorio do Github, e va na pasta **_backend_**, e rode o script **_build.bash_**. Esse script ira buildar uma imagem docker local para o seu backend. Depois, va na pasta **_\_docker-compose_** e rode o script **_docker-up.bash_**, que ira subir o **docker-compose.yml**, subindo todos os servicos.

## Objetivos do Teste

O objetivo deste teste e avaliar a capacidade do desenvolvedor em refatorar e ajustar uma codebase inicial. O teste possui uma base de dados em SQLite3, que possui dados de livros, autores, editores e etc. A aplicacao atual lista e retorna apenas poucos items.

O desenvolvedor devera:
- Refatorar o codigo;
- Alterar o filtro para permitir que mais de um campo possa ser buscado ao mesmo tempo (concomitante);
- Criar uma arquitetura de filtros que permite a inclusao de novo filtros ao longo do tempo e forma facil e segura;

O FE deve rodar junto com os outros servicos em docker, ou seja, deve ser adicionado um servico ao **docker-compose.yml** com o nome frontend. Para isso, o FE precisa de um **_Dockerfile_**, e de um script **_build.bash_**, como o servico da API.

**IMPORTANTE**: ao rodar o **docker-compose.yml**, o FE deve subir junto com os outros servicos.

## Avaliacao

Aqui vao os pontos que sera avaliados no teste:

**_Obrigatorios_**

**_Funcionais_**
- O FE deve possuir uma imagem docker, e rodar junto com os outros servicos no **_docker-compose.yml_** (1 ponto)
- Os filtros deverao estar funcionais, filtrando por cada campo individualmente (1 ponto)
- Os filtros poderao ser acumulados, ou seja, ao buscar por titulo E editora, o resultado sera a combinacao dos campos (2 pontos)
- As telas devem ser feitas usando componentes da biblioteca [shadcn/ui](https://ui.shadcn.com/) (1 ponto)
- Estados vazios tratados (sem resultados, filtros parciais). (1 pt)
- Performance: Filtros com debounce para evitar chamadas excessivas à API. (Bônus 1 pt)


**_Codigo_**
- O filtro e um componente independente to resto da tela (1 ponto);
- O filtro permite que outros campos possam ser adicionados posteriormente (1 ponto);
- O filtro devera implementar alguma forma de Gerenciamento de estado escalável (2 pontos);
- O filtro deve ser testado, de preferencia com uma ferramenta e2e, como o Cypress (2 pontos);

**Total: 7 pontos**

**_Pontos extras_**

- Fazer o deploy publico da aplicacao em qualquer servico que aceite as imagens docker (1 ponto)
- Adicionar testes (unitarios ou end-to-end) (1 pontos)
- Uso do Typescript (1 ponto)

**Total: 3 pontos**

### Criterios tecnicos

Alem da avaliacao das funcionalidades do FE, tambem serao levados em consideracao aspectos tecnicos como:

- Componentizacao:
  - Criacao de componentes reutilizaveis
- Organizacao
  - Clareza e legibilidade do codigo
  - Comentarios e documentacao
  - Organizacao clara das pastas e arquivos
- Principios
  - Clean Code
  - DRY

  
  # 📚 Murabei Fullstack Test
  
  Teste técnico para vaga de **Desenvolvedor FullStack** na **Murabei Data Science**, utilizando **Docker**, **Python (Flask)**, **Next.js 14+**, **SQLite3** e boas práticas de arquitetura modular.
  
  ---
  
  ## Resolução do teste

  ## Sumário
    
  - [ Estrutura do Repositório](#-estrutura-do-repositório)
  - [ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
  - [ Como Executar Localmente (sem Docker)](#-como-executar-localmente-sem-docker)
  - [ Como Executar com Docker Compose](#-como-executar-com-docker-compose)
  - [ Endpoints Disponíveis](#-endpoints-disponíveis)
  - [ Testes Automatizados com Cypress](#-testes-automatizados-com-cypress)
  - [ Arquitetura e Componentes](#-arquitetura-e-componentes)
  - [ Critérios de Avaliação](#-critérios-de-avaliação)
  - [ Considerações Técnicas](#-considerações-técnicas)
  - [ Sobre o Autor](#-sobre-o-autor)
  
  ---  
  
  ## Estrutura do Repositório
  
  ```bash
  /
  ├── _docker-compose/       # Docker Compose
  │   ├── docker-compose.yml
  │   └── docker-up.bash
  │
  ├── backend/               # API Flask
  │   ├── app.py
  │   ├── db.py
  │   ├── setup_db.py
  │   ├── services/
  │   │   ├── books.py
  │   │   └── authors.py
  │   ├── requirements.txt
  │   ├── Dockerfile
  │   └── build.bash
  │
  ├── frontend/              # Next.js 14
  │   ├── Dockerfile
  │   └── codes/
  │       ├── src/
  │       │   ├── app/page.tsx
  │       │   ├── components/FilterBar.tsx
  │       │   ├── components/ui/input.tsx
  │       │   └── lib/utils.ts
  │       ├── tailwind.config.js
  │       ├── tsconfig.json
  │       ├── package.json
  │       └── build.bash
  ```
  
  ---
  
  ## Tecnologias Utilizadas
  
  ### Backend
  
  - Python 3.9
  - Flask + Flask-CORS
  - SQLite3
  - Docker
  
  ### Frontend
  
  - Next.js 14
  - TypeScript
  - TailwindCSS
  - shadcn/ui
  - Cypress (testes e2e)
  - use-debounce (performance dos filtros)
  
  ---
  
  ## Como Executar Localmente (sem Docker)
  
  ### Backend
  
  ```bash
  cd backend
  pip install -r requirements.txt
  python setup_db.py
  python app.py
  ```
  
  Acesse: [http://localhost:5000/api/v1/books](http://localhost:5000/api/v1/books)
  
  ### Frontend
  
  ```bash
  cd frontend/codes
  npm install
  npm run dev
  ```
  
  Acesse: [http://localhost:3000](http://localhost:3000)
  
  ---
  
  ## Como Executar com Docker Compose
  
  Pré-requisitos: Docker e Docker Compose instalados.
  
  ```bash
  cd _docker-compose
  bash docker-up.bash
  ```
  
  - **Frontend**: [http://localhost:3000](http://localhost:3000)  
  - **Backend**: [http://localhost:5000/api/v1/books](http://localhost:5000/api/v1/books)
  
  Para parar:
  ```bash
  docker compose down
  ```
  
  ---
  
  ## Endpoints Disponíveis
  
  ### `GET /api/v1/books`
  
  **Parâmetros opcionais:**
  - `author`: filtro parcial por autor
  - `title`: filtro parcial por título
  - `biography`: filtro parcial por biografia
  - `page`: número da página (default: 1)
  - `page_size`: resultados por página (default: 10)
  
  ### Exemplo:
  ```
  GET /api/v1/books?author=george&title=1984
  ```
  
  ### `GET /api/v1/authors`
  
  Retorna todos os autores cadastrados.
  
  ---
  
  ## Testes Automatizados com Cypress
  
  ### Rodar em modo visual:
  ```bash
  npm run test:e2e
  ```
  
  ### Rodar em modo headless:
  ```bash
  npm run test:e2e:headless
  ```
  
  ---
  
  ## Arquitetura e Componentes
  
  ### Backend
  - Modularização com serviços separados (`books.py`, `authors.py`)
  - Filtros combinados com `LIKE` e tratamento seguro
  - Paginação por query string
  - Tratamento de erros e status HTTP apropriado
  
  ### Frontend
  - Filtros dinâmicos por **autor**, **título** e **biografia**
  - `FilterBar.tsx` com debounce via `use-debounce`
  - Componentização clara com **Tailwind** e **shadcn/ui**
  - Tipagem com TypeScript
  - Estrutura pronta para expansão futura
  
  ---
  
  ## Critérios de Avaliação
  
  ### Obrigatórios – Funcionalidades
  
  - [x] Frontend com imagem Docker no `docker-compose.yml`
  - [x] Filtros funcionais por campo
  - [x] Filtros acumulativos
  - [x] Uso de `shadcn/ui`
  - [x] Estados vazios tratados
  - [x] Debounce nos filtros (bônus)
  
  ### Obrigatórios – Código
  
  - [x] Filtro como componente independente
  - [x] Arquitetura extensível para novos filtros
  - [x] Gerenciamento de estado escalável
  - [x] Testes E2E com Cypress
  
  ### Pontos Extras
  
  - [x] Uso de TypeScript
  - [x] Testes automatizados
  - [ ] Deploy público (não implementado)
  
  ---
  
  ## Considerações Técnicas
  
  - Clean Code aplicado em todas as camadas
  - Responsabilidade única por função
  - Estrutura organizada, comentada e escalável
  - Docker multi-stage nos builds
  - APIs tratadas com robustez e mensagens de erro claras
  
  ---
  
  ## Sobre o Autor
  
  **André Moraes**  
  Analista de Sistemas | Desenvolvedor FullStack  
  Desenvolvido com foco em **arquitetura sólida**, **manutenibilidade** e **experiência técnica fluente** em ambientes Dockerizados.
  