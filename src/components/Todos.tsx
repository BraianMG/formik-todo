import { useContext } from "react";
import AddTodoBar from "./AddTodoBar";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todos";

const Todos: React.FC = () => {
  const { todos, addTodo, toggleTodoStatus, removeTodo } =
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

export default Todos;
