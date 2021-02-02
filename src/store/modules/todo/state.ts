interface Todo {
  id: string;
  title: string;
  checked: boolean;
}
export interface TodoState {
  todos: Todo[];
}
