import { FC, useEffect, useReducer } from "react";
import { axiosClient } from "../../config";
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

  const fetchTodos = async () => {
    const { data } = await axiosClient.get<Todo[]>("/todos");
    dispatch({ type: "[Todos] - Fetch", payload: data });
  };

  const addTodo = async (newTodo: Pick<Todo, "title" | "description">) => {
    const { data } = await axiosClient.post<Todo>("/todos", newTodo);
    dispatch({ type: "[Todos] - Add", payload: data });
  };

  const updateTodo = async (updatedTodo: Todo) => {
    const { data } = await axiosClient.put<Todo>(`/todos/${updatedTodo.id}`, updatedTodo);
    console.log(data);
    dispatch({ type: "[Todos] - Update", payload: data });
  };

  const removeTodo = async (id: string) => {
    const { data } = await axiosClient.delete<Todo>(`/todos/${id}`);
    dispatch({ type: "[Todos] - Remove", payload: data });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        ...state,
        addTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
