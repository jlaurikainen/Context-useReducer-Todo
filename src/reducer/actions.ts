import { Todo } from "../types";

export enum ActionType {
  ADD = "ADD",
  EDIT = "EDIT",
  DELETE = "DELETE",
  LOAD = "LOAD",
}

export type EditTodoPayload = Pick<Todo, "id"> & Partial<Todo>;

interface AddAction {
  type: ActionType.ADD;
  todo: string;
}

interface DeleteAction {
  type: ActionType.DELETE;
  id: number;
}

interface EditAction {
  type: ActionType.EDIT;
  payload: EditTodoPayload;
}

interface LoadAction {
  type: ActionType.LOAD;
}

export type Action = AddAction | DeleteAction | EditAction | LoadAction;
