import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const { addTodo } = useStateContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodo.trim().length) {
      addTodo(newTodo);

      setNewTodo("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          New todo
          <input
            onChange={(event) => setNewTodo(event.currentTarget.value)}
            type="text"
            value={newTodo}
          />
        </label>
        <button disabled={!newTodo.trim().length} type="submit">
          Add todo
        </button>
      </form>
    </section>
  );
};

export default AddTodoForm;
