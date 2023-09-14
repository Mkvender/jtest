import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type nameElement = {
  name: string;
};

const initialState: State = {
  listTodo: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoElement>) => ({
      ...state,
      listTodo: [...state.listTodo, action.payload],
    }),
    eraseTodo: (state, action: PayloadAction<number>) => ({
      ...state,
      listTodo: state.listTodo.filter((todo) => todo.id !== action.payload),
    }),
    editTodo: (state, action: PayloadAction<todoElement>) => {
      const newListTodo = [...state.listTodo];
      const todoElement = action.payload;

      const index = newListTodo.findIndex((todo) => todo.id === todoElement.id);

      newListTodo[index] = todoElement;

      return {
        ...state,
        listTodo: newListTodo,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, editTodo, eraseTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
