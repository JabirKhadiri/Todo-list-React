import InputFeild from "./components/InputFeild";
import "./App.css";
import { useState } from "react";
import { Todo } from "./models/model";
import TodosList from "./components/TodosList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("")
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="heading">My todo-list</h1>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} ></InputFeild>
        <TodosList  todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
