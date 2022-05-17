import { Todo } from '../../interfaces'
import { TodosState } from '.'

type TodosActionType =
  | { type: '[Todos] - Fetch'; payload: Todo[] }
  | { type: '[Todos] - Add'; payload: Todo }
  | { type: '[Todos] - Update'; payload: Todo }
  | { type: '[Todos] - Remove'; payload: Pick<Todo, 'id'> }

export const todosReducer = (
  state: TodosState,
  action: TodosActionType
): TodosState => {
  switch (action.type) {
    case '[Todos] - Fetch':
      return {
        ...state,
        todos: [...action.payload],
      }

    case '[Todos] - Add':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            completed: action.payload.completed,
          },
        ],
      }

    case '[Todos] - Update':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
              completed: action.payload.completed,
            }
          }
          return todo
        }),
      }

    case '[Todos] - Remove':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      }

    default:
      return state
  }
}
