import React, { ChangeEvent, useState } from "react";
import type { RootState } from "../components/store/store";
import { useSelector, useDispatch } from "react-redux";
import { TodoElement } from "./partials/TodoElement/TodoElement";
import {
  todoElement,
  addTodo,
  editTodo,
  eraseTodo,
} from "../TodoList/partials/todoslice";

export const TodoList: React.FC = () => {
  const [description, setDescription] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState(1);

  const allTodo = useSelector((state: RootState) => state.toDo.listTodo);
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(eraseTodo(id));
  };

  const onEdit = (todo: todoElement) => {
    dispatch(editTodo(todo));
    setShowEdit(false);
  };

  const onAdd = (todo: todoElement) => {
    dispatch(addTodo(todo));
    setId(id + 1);
    setDescription("");
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const todoElementToMake = { id, description };
  return (
    <div>
      <ul>
        {allTodo.map((todo) => (
          <TodoElement
            key={todo.id}
            todoElement={todo}
            onDelete={onDelete}
            onEdit={onEdit}
            showEditState={showEdit}
            setShowEditState={setShowEdit}
          />
        ))}
      </ul>
      <div>
        <label>Description: </label>
        <input type="text" value={description} onChange={onChangeDescription} />
        <button
          onClick={() => {
            onAdd(todoElementToMake);
          }}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
};
