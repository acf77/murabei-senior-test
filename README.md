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
  
