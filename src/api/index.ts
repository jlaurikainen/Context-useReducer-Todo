import { Todo } from "../types";

const DATA_KEY = "TODO_DATA";

export const loadTodos = (): Todo[] => {
  const storageData = localStorage.getItem(DATA_KEY);

  if (storageData) {
    const parsedData: Todo[] | undefined = JSON.parse(storageData);

    if (!parsedData) {
      return [];
    }

    return parsedData;
  }

  return [];
};

export const storeTodos = async (todos: Todo[]) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
};
