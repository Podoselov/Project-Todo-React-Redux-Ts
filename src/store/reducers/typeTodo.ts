export interface ITodo {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
}

export interface Todo {
  todo: ITodo[];
}

export enum ActionsTypes {
  TODO = "TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export interface TodoAction {
  type: ActionsTypes.TODO;
  payload: Todo;
}

export type TodoActions = TodoAction;
