import { useContext } from "react";
import AddTodoBar from "./components/AddTodoBar";
import TodoItem from "./components/TodoItem";
import { TodosContext } from "./context/todos";
import { Todo } from "./interfaces";

const App: React.FC<{}> = () => {
  const { todos, addTodo, updateTodo, removeTodo } =
    useContext(TodosContext);

  return (
    <div className="w-full sm:w-9/12 lg:w-7/12 mx-auto my-20">
      <AddTodoBar
        addTodo={(title: string, description: string) =>
          addTodo({ title, description })
        }
      />
      <br />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={(todo: Todo) => updateTodo(todo)}
            removeTodo={(id: string) => removeTodo(id)}
          />
        );
      })}
    </div>
  );
};

export default App;
