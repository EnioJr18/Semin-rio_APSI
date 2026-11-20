# TaskFlow — roteiro da demonstração e publicação no GitHub

Equipe: Enio, David Gabriel e Kelven Eduardo.

## Demonstração ao vivo (4 minutos)

### 0:00–1:00 | Enio — O projeto
- Abrir `http://localhost:3000` com `npm run dev` executando.
- Explicar que o React compõe a interface e o Next.js organiza páginas e APIs.
- Mostrar rapidamente `app/page.tsx`, `components/` e `context/`.
- Frase de apoio: “Esta é uma aplicação de tarefas pequena de propósito: permite enxergar como os componentes, o estado e o contexto trabalham juntos.”

### 1:00–2:00 | David Gabriel — API e interação
- Abrir `http://localhost:3000/api/tasks` e apontar os campos `id`, `title`, `completed`, `category`.
- Mostrar `app/api/tasks/route.ts` e explicar que o Next.js devolve JSON por um Route Handler.
- Retornar à interface, adicionar `Revisar React e Next.js` e marcar como concluída.
- Frase de apoio: “Os dados iniciais vêm da API; a partir daí, o estado do React coordena a atualização da tela.”

### 2:00–3:30 | Kelven Eduardo — 3 padrões na prática
- **Composite**: `components/TaskBoard.tsx` contém `TaskList`, que compõe vários `TaskCard` do arquivo `components/TaskCard.tsx`.
- **Observer / reatividade (analogia)**: em `context/TasksContext.tsx`, apontar `useState` e `setTasks`; a alteração do estado causa atualização dos componentes que o utilizam. Não é o Observer clássico GoF.
- **Provider**: mostrar `TasksContext.Provider` e `useTasks`, usados pelos componentes descendentes para evitar repassar props por intermediários.
- Frase de apoio: “São padrões que ajudam a dividir responsabilidades, reagir a mudanças e compartilhar informações entre componentes.”

### 3:30–4:00 | Enio — Encerramento
- Mostrar os filtros Pendentes/Concluídas.
- Explicar que a PoC não usa banco: mudanças ficam temporariamente no navegador e são reiniciadas ao atualizar.
- Fechar: “O objetivo não é montar um gerenciador completo, mas mostrar a arquitetura e os padrões de forma observável.”

## Checklist antes de apresentar
- [ ] Rodar `npm install` e `npm run dev`.
- [ ] Conferir `/` e `/api/tasks`.
- [ ] Deixar as abas do navegador e os arquivos de código abertos.
- [ ] Reduzir o zoom do VS Code, se necessário, para exibir os trechos sem rolagem.
- [ ] Não depender da rede: apresentar localmente, com dados iniciais.
- [ ] Ensaiar e cronometrar os 4 minutos.

## Publicação no GitHub

O repositório sugerido é `taskflow-react-next-seminario`, **novo e público**, sob a conta de quem for publicar. Não reutilize repositórios de outras atividades.

1. Acesse https://github.com/new e crie `taskflow-react-next-seminario`, com visibilidade **Public**, sem marcar README, `.gitignore` ou licença (esses arquivos já existem localmente).
2. Abra um terminal na pasta **`poc-next`**, não na pasta que contém o ZIP.
3. Execute os comandos abaixo, substituindo `SEU_USUARIO` pelo usuário GitHub, se necessário:

```bash
git init
git add .
git commit -m "feat: prova de conceito TaskFlow com React e Next.js"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/taskflow-react-next-seminario.git
git push -u origin main
```

Se a pasta já tiver um repositório Git inicializado, confira primeiro `git remote -v` e use o remoto existente apenas se for realmente o repositório desta PoC.

4. Verifique no GitHub se aparecem `app/`, `components/`, `context/`, `lib/`, `package.json` e `README.md`.
5. Confirme que **`node_modules/`**, **`.next/`** e arquivos `.env` não foram enviados.
6. Cole a URL do repositório no material entregue ao professor.

### Atualizações futuras

```bash
git add .
git commit -m "docs: ajustes finais do seminario"
git push
```

## Escopo técnico

`GET /api/tasks` fornece dados iniciais. Adicionar, concluir, filtrar e excluir alteram o estado React no navegador; **não** são operações CRUD persistidas na API. A atividade permite uma PoC com consumo de API, que é a abordagem adotada.
