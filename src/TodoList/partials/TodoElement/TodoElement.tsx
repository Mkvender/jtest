import React from "react";
import { todoElement } from "../todoslice";

type TodoElementType = {
  todoElement: todoElement;
  onDelete: (id: number) => void;
  onEdit: (element: todoElement) => void;
};

export const TodoElement: React.FC<TodoElementType> = (
  todoElement: todoElement,
  onDelete: (id: number) => void,
  onEdit: (element: todoElement) => void
) => {
  return (
    <li key={todoElement.id}>
      <button onClick={() => onEdit}>Eliminar Tarea</button>
      <p>{todoElement.description}</p>
      <button onClick={() => onDelete}>Eliminar Tarea</button>
    </li>
  );
};
