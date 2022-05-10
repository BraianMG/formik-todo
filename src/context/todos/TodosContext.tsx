import { createContext } from "react";
import { Todo } from "../../interfaces";

interface ContextProps {
  todos: Todo[];
  addTodo: (payload: Pick<Todo, "title" | "description">) => void;
  updateTodo: (todo: Todo) => void;
  // toggleTodoStatus: (id: Pick<Todo, "id">) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext({} as ContextProps);
