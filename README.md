# TaskFlow — PoC React + Next.js

Projeto demonstrativo para o seminário de Frameworks Modernos e Design Patterns (IFAL Maceió).

**Equipe:** Enio, David Gabriel e Kelven Eduardo.

## Pré-requisitos

- Node.js 20.9+ (recomendado usar uma versão LTS atual)
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. A API fica em `http://localhost:3000/api/tasks`.

## O que mostrar na apresentação

1. Abra `/api/tasks`: mostre a resposta JSON do Route Handler `app/api/tasks/route.ts`.
2. Abra `/`: adicione uma tarefa, marque como concluída e filtre a lista.
3. **Composite:** `components/TaskBoard.tsx` contém `TaskList`, que rende vários `TaskCard` de `components/TaskCard.tsx`.
4. **Observer / reatividade:** `useState` e `setTasks` em `context/TasksContext.tsx` provocam nova renderização dos componentes que leem o estado/contexto. É uma **analogia ao padrão Observer**, não a implementação clássica do GoF.
5. **Provider:** `TasksProvider` disponibiliza ações e tarefas via `useContext` sem prop drilling.
6. Mostre o fluxo: `fetch('/api/tasks')` → `app/api/tasks/route.ts` → JSON → `setTasks` → `TaskList`/`TaskCard`.

## Estrutura

```text
app/
  api/tasks/route.ts     # Route Handler: GET /api/tasks
  globals.css            # Estilos
  layout.tsx             # Layout raiz
  page.tsx               # Página da aplicação
components/
  TaskBoard.tsx          # Composite + filtros/formulário/estatísticas
  TaskCard.tsx           # Item da lista
context/
  TasksContext.tsx       # Context Provider + estado reativo
lib/
  tasks.ts               # Tipo e dados iniciais
```

## Observações

- A API fornece dados iniciais fixos; inclusões e alterações são **temporárias e mantidas apenas em memória no cliente**. Recarregar redefine as tarefas. Não há CRUD persistente nem banco de dados.
- Uma API de leitura + operações de interface atende ao escopo de **consumo de API** da PoC sugerida na atividade.
- Enviar este diretório para um repositório GitHub antes da entrega; o ZIP não é um repositório publicado.

## Fontes

- https://react.dev/learn
- https://react.dev/reference/react/useContext
- https://nextjs.org/docs/app
- https://nextjs.org/docs/app/getting-started/route-handlers
