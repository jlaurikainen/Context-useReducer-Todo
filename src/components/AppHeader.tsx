import React from "react";
import { storeTodos } from "../api";
import { useStateContext } from "../context/StateContext";

const AppHeader = () => {
  const { todos, loadTodos } = useStateContext();

  return (
    <header>
      <h1>Todos app</h1>
      <ul>
        <li>
          <button onClick={() => loadTodos()}>Load todo storage</button>
        </li>
        <li>
          <button onClick={() => storeTodos(todos)}>Store current todos</button>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
