# 👾 Stranger Things — Frontend

Descrição do projeto
-------------------
Frontend em Next.js (App Router) inspirado em Stranger Things. A aplicação consome uma API (Stranger Things API) para listar personagens e easter eggs, exibir detalhes e navegar entre páginas como Home e Sobre.

Funcionalidades
---------------
- Listagem de personagens (GET).
- Página de detalhe de personagem por id (GET).
- Listagem de easter eggs/curiosidades (GET).
- Página de detalhe do easter egg por id (GET).
- Página "Sobre mim" com perfil e descrição.

Tecnologias utilizadas
---------------------
- Next.js (App Router)
- React
- Ant Design (UI)
- next/image (imagens)
- CSS Modules e Tailwind/PostCSS (estilos)
- Axios ou fetch (requisições HTTP)

Instalação e execução
---------------------
1. Instalar dependências:
```sh
npm install
```

2. Variáveis de ambiente (crie um arquivo .env.local na raiz):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```
(Substitua pela URL da sua API; pode ser uma instância local ou um servidor remoto.)

3. Executar em desenvolvimento:
```sh
npm run dev
```
Acesse http://localhost:3000

4. Build para produção:
```sh
npm run build
npm run start
```

Estrutura do projeto (resumida)
-------------------------------
src/
├─ app/
│  ├─ page.jsx                — Home
│  ├─ layout.js               — Layout global
│  ├─ globals.css             — Estilos globais
│  ├─ sobremim/
│  │  └─ page.jsx             — Página Sobre
│  ├─ characterlist/
│  │  ├─ page.jsx             — Lista de personagens
│  │  └─ [id]/page.jsx        — Detalhes do personagem
│  └─ easteregg/
│     ├─ page.jsx             — Lista de easter eggs
│     └─ [id]/page.jsx        — Detalhes do easter egg
public/
├─ image/                     — Imagens estáticas (ex.: sobre.jpg)
next.config.mjs
package.json

Exemplos de uso da API
----------------------
Assumindo NEXT_PUBLIC_API_URL=http://localhost:5000

- Listar personagens
```sh
curl http://localhost:5000/characters
```

- Obter personagem por id (ex: id = 1)
```sh
curl http://localhost:5000/characters/1
```

- Listar easter eggs
```sh
curl http://localhost:5000/easteregg
```

- Obter easter egg por id (ex: id = 2)
```sh
curl http://localhost:5000/easteregg/2
```

Exemplo de fetch no Next.js (client-side)
```js
const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const res = await fetch(`${API}/characters`);
const characters = await res.json();
```

Observações:
-----------
- Neste repositório o frontend consome apenas as rotas de leitura (GET) da API.
- Para testar CRUD completo, execute a API (Node.js + Express + Prisma) separadamente conforme repositório da API.

Acessar as páginas dos personagens principais
---------------------------------------------
- Onze (Jane Ives / Jane Hopper)
- Mike Wheeler
- Will Byers
- Dustin Henderson
- Lucas Sinclair
- Max Mayfield
- Steve Harrington
- Nancy Wheeler
- Jonathan Byers
- Billy Hargrove
- Joyce Byers
- Jim Hopper
- Murray Bauman
- Robin Buckley
- Erica Sinclair
- Alexei
- Bob Newby
- Dr. Martin Brenner
- Dr. Owens
- Demogorgon
- 010
- Dimitri Antolov
- 002
- 001 / Henry Creel / Vecna
- Eddie Munson
- Keith
- Devorador de mentes
- Yuri Ismalov

 esses personagens estão com informações completas na API; acesse as páginas de detalhe correspondentes pelas rotas /characters/:id 
