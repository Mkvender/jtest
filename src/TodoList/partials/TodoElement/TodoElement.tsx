import React, { ChangeEvent, useState } from "react";
import { todoElement } from "../todoslice";

type TodoElementType = {
  todoElement: todoElement;
  onDelete: (id: number) => void;
  onEdit: (element: todoElement) => void;
  showEditState: boolean;
  setShowEditState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TodoElement: React.FC<TodoElementType> = ({
  todoElement,
  onDelete,
  onEdit,
  showEditState,
  setShowEditState,
}) => {
  const [newDescription, setNewDescription] = useState(todoElement.description);

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  return (
    <li>
      <div>
        <button onClick={() => setShowEditState(!showEditState)}>
          Modificar Tarea
        </button>
        {showEditState ? (
          <div>
            <input
              type="text"
              value={newDescription}
              onChange={onChangeDescription}
            />
            <button
              onClick={() =>
                onEdit({ id: todoElement.id, description: newDescription })
              }
            >
              Editar Tarea
            </button>
          </div>
        ) : (
          <p>{todoElement.description}</p>
        )}
        <button onClick={() => onDelete(todoElement.id)}>Eliminar Tarea</button>
      </div>
    </li>
  );
};
