export type Task = { id: string; title: string; completed: boolean; category: 'Estudo' | 'Projeto' | 'Pessoal' };
export const initialTasks: Task[] = [
  { id: '1', title: 'Entender componentes React', completed: true, category: 'Estudo' },
  { id: '2', title: 'Identificar 3 Design Patterns', completed: false, category: 'Estudo' },
  { id: '3', title: 'Apresentar a PoC no IFAL', completed: false, category: 'Projeto' },
];
