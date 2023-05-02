import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: (e: string) => void;
  handleAdd: (e: React.FormEvent) => void;
}

function InputFeild({ todo, setTodo, handleAdd }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {handleAdd(e); inputRef.current?.blur();}}>
      <input
        ref={inputRef}
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
}

export default InputFeild;
