import { createContext, useContext } from "react";
import { EditTodoPayload } from "../reducer/actions";
import { Todo } from "../types";

interface StateContextProps {
  todos: Todo[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (payload: EditTodoPayload) => void;
  loadTodos: () => void;
}

const StateContext = createContext<StateContextProps | null>(null);

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("Using StateContext outside provider.");
  }

  return context!;
};

export default StateContext;
