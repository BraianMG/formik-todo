import { useContext } from "react";
import AddTodoBar from "./components/AddTodoBar";
import TodoItem from "./components/TodoItem";
import { TodosContext } from "./context/todos";
import { Todo } from "./interfaces";
import logo from "./img/logo.png";

const App: React.FC<{}> = () => {
  const { todos, addTodo, updateTodo, removeTodo } = useContext(TodosContext);

  return (
    <div className="w-full sm:w-9/12 lg:w-7/12 mx-auto my-20">
      <div className="flex flex-row justify-center items-center mb-20">
        <img src={logo} className="w-8 sm:w-10 mr-3"/>
        <h1 className="text-4xl font-bold text-yellow-500 sm:text-5xl sm:truncate">
          ToDo List
        </h1>
      </div>

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
