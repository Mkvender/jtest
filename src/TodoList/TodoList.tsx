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
  const allTodo = useSelector((state: RootState) => state.toDo.listTodo);
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(eraseTodo(id));
  };

  const onEdit = (todo: todoElement) => {
    dispatch(editTodo(todo));
  };

  const onAdd = (todo: todoElement) => {
    dispatch(addTodo(todo));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      {allTodo.map((todo) => (
        <TodoElement todoElement={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
      <div>
        <label>Description</label>
        <input type="text" onChange={onChangeDescription} />
        <button onClick={() => onAdd}>Add ToDo</button>
      </div>
      <h3>{description}</h3>
    </div>
  );
};
