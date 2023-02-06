
import { useState } from "react";

export const FormTodo=({ addTodo })=> {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3>Todo</h3>
        <input
          type="text"
          className="input_todo"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </form>
    );
  }