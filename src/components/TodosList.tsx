import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

function TodosList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}

export default TodosList;
