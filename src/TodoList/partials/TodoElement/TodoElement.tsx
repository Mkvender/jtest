import React from "react";
import { todoElement } from "../todoslice";

type TodoElementType = {
  todoElement: todoElement;
  onDelete: (id: number) => void;
  onEdit: (element: todoElement) => void;
};

export const TodoElement: React.FC<TodoElementType> = ({ id, description }) => {
  return (
    <li key={id}>
      <p>{description}</p>
      <button></button>
    </li>
  );
};
