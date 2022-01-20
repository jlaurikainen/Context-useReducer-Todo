import React, { Fragment } from "react";
import AddTodoForm from "./components/AddTodoForm";
import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Fragment>
      <AppHeader />
      <main>
        <AddTodoForm />
        <TodoList />
      </main>
    </Fragment>
  );
};

export default App;
