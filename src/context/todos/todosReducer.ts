import { TodosState } from ".";
import { Todo } from "../../interfaces";

type TodosActionType =
  | { type: "[Todos] - Fetch"; payload: Todo[] }
  | { type: "[Todos] - Add"; payload: Pick<Todo, "title" | "description"> }
  | { type: "[Todos] - Update"; payload: Todo }
  | { type: "[Todos] - Toggle status"; payload: Pick<Todo, "id"> }
  | { type: "[Todos] - Remove"; payload: Pick<Todo, "id"> };

export const todosReducer = (
  state: TodosState,
  action: TodosActionType
): TodosState => {
  switch (action.type) {
    case "[Todos] - Fetch":
      return {
        ...state,
        todos: [...action.payload],
      };

    case "[Todos] - Add":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: `todo__${Math.random().toString().substr(2)}`,
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };

    case "[Todos] - Update":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.description = action.payload.description;
          }
          return todo;
        }),
      };

    case "[Todos] - Toggle status":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    case "[Todos] - Remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
};
