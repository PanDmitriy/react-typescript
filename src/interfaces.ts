export interface ITodoFormProps {
  onAdd(title: string): void; 
};

export interface ITodoListProps {
  todos: ITodo[],
  onToggle(id: number): void,
  onRemove(id:number): void,
};

export interface ITodo {
  title: string,
  id: number,
  completed: boolean,
}