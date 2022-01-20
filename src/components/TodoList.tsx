import React from "react";
import { useStateContext } from "../context/StateContext";

const TodoList = () => {
  const { todos, deleteTodo, editTodo } = useStateContext();

  return (
    <section>
      <h2>Todos</h2>
      {todos.map(({ id, todo, complete }) => (
        <div
          className={`todo-item${complete ? " todo-complete" : ""}`}
          key={id}
        >
          <button onClick={() => editTodo({ id, complete: !complete })}>
            {todo}
          </button>
          <button
            aria-label={`Delete todo: ${todo}`}
            onClick={() => deleteTodo(id)}
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
