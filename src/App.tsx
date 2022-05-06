import { useContext } from "react";
import AddTodoBar from "./components/AddTodoBar";
import TodoItem from "./components/TodoItem";
import { TodosContext } from "./context/todos";

const App: React.FC<{}> = () => {
  // Todo items
  const { todos, addTodo, toggleTodoStatus, removeTodo } =
    useContext(TodosContext);

  console.log(todos);
  return (
    <div className="w-full sm:w-9/12 lg:w-7/12 mx-auto my-20">
      <AddTodoBar
        addTodo={(title: string, description: string) =>
          addTodo({ title, description })
        }
      />
      <br />
      {todos?.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            toggleTodoStatus={(id: string) => toggleTodoStatus({ id })}
            removeTodo={(id: string) => removeTodo({ id })}
          />
        );
      })}
    </div>
  );
};

export default App;
