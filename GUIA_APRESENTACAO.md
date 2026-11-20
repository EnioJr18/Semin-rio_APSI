# Guia da apresentação — React.js com Next.js (revisado)

**Equipe:** Enio, David Gabriel e Kelven Eduardo.  
**Disciplina:** Análise e Projeto de Sistemas de Informação — IFAL Maceió.  
**Duração sugerida:** cerca de 19 minutos de exposição e 5 para perguntas.  

A nova versão tem **17 slides**. Os nomes e tempos aparecem apenas aqui, não na apresentação projetada.

## Divisão sugerida

| Slides | Responsável | Conteúdo | Tempo aproximado |
|---|---|---|---|
| 1–5 | Enio | Problema real, história, papel de cada tecnologia e arquitetura | 3 min |
| 6–8 | David Gabriel | Recursos, renderização e aplicações reais | 4 min |
| 9–12 | Kelven Eduardo | Composite, Observer (analogia) e Provider, com código da PoC | 6 min |
| 13–14 + navegador | Todos | TaskFlow e fluxo da API | 4 min |
| 15–17 | Enio e David | Análise crítica, comparação e fechamento | 2 min |

## Roteiro para mostrar a aplicação

1. Executar `npm install` e `npm run dev` na pasta `poc-next` e abrir `http://localhost:3000`.
2. Adicionar uma tarefa, concluí-la, filtrar e mostrar como os contadores acompanham o estado.
3. Mostrar `components/TaskBoard.tsx` e `components/TaskCard.tsx` para explicar **Composite**.
4. Mostrar `context/TasksContext.tsx` para explicar `useState` (**analogia ao Observer**) e `TasksProvider` (**Provider**).
5. Abrir `http://localhost:3000/api/tasks` e mostrar `app/api/tasks/route.ts`. Explique que os dados não persistem no servidor.

## Como abrir os slides

Abra `apresentacao.html` no navegador. Use as setas ou espaço para navegar e a tecla `F` para tela cheia. Para exportar em PDF, use `Ctrl+P`, orientação paisagem e gráficos de fundo ativados.

## Entrega

- [ ] Testar todos os comandos e interações localmente.
- [ ] Subir a pasta `poc-next` para o GitHub.
- [ ] Incluir link para o repositório na entrega.
- [ ] Ensaiar a troca entre navegador, editor e slides.

## Referências

- https://react.dev/learn
- https://react.dev/reference/react/useState
- https://react.dev/reference/react/useContext
- https://nextjs.org/docs/app
- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://nextjs.org/docs/app/getting-started/route-handlers
