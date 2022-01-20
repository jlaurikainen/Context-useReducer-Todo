import React, { HTMLAttributes, useReducer } from "react";
import { ActionType, EditTodoPayload } from "../reducer/actions";
import StateReducer from "../reducer/StateReducer";
import StateContext from "./StateContext";

const StateProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [todos, dispatch] = useReducer(StateReducer, []);

  return (
    <StateContext.Provider
      {...props}
      value={{
        addTodo: (todo: string) => {
          dispatch({ type: ActionType.ADD, todo });
        },
        deleteTodo: (id: number) => {
          dispatch({ type: ActionType.DELETE, id });
        },
        editTodo: (payload: EditTodoPayload) => {
          dispatch({ type: ActionType.EDIT, payload });
        },
        loadTodos: () => {
          dispatch({ type: ActionType.LOAD });
        },
        todos,
      }}
    />
  );
};

export default StateProvider;
