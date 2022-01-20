import { loadTodos } from "../api";
import { Todo } from "../types";
import { Action, ActionType } from "./actions";

const StateReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ActionType.ADD: {
      return [
        ...state,
        {
          id: new Date().getTime(),
          todo: action.todo,
          complete: false,
        },
      ];
    }

    case ActionType.EDIT: {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state];

      newState[index] = { ...newState[index], ...action.payload };

      return newState;
    }

    case ActionType.DELETE: {
      const index = state.findIndex((todo) => todo.id === action.id);
      const newState = [...state];

      newState.splice(index, 1);

      return newState;
    }

    case ActionType.LOAD: {
      return loadTodos();
    }

    default: {
      return state;
    }
  }
};

export default StateReducer;
