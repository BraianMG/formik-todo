import { FC, useEffect, useReducer } from "react";
import { Todo } from "../../interfaces";
import { TodosContext, todosReducer } from "./";

export interface TodosState {
  todos: Todo[];
}

const TODOS_INITIAL_STATE: TodosState = {
  todos: [],
};

export const TodosProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, TODOS_INITIAL_STATE);

  const fetchTodos = () =>
    dispatch({ type: "[Todos] - Fetch", payload: state.todos });

  const addTodo = (newTodo: Pick<Todo, "title" | "description">) =>
    dispatch({ type: "[Todos] - Add", payload: newTodo });

  const updateTodo = (updatedTodo: Todo) =>
    dispatch({ type: "[Todos] - Update", payload: updatedTodo });

  const toggleTodoStatus = (id: Pick<Todo, "id">) =>
    dispatch({ type: "[Todos] - Toggle status", payload: id });

  const removeTodo = (id: Pick<Todo, "id">) =>
    dispatch({ type: "[Todos] - Remove", payload: id });

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        ...state,
        addTodo,
        toggleTodoStatus,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
