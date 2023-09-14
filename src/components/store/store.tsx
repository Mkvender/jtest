import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../TodoList/partials/todoslice";

export const store = configureStore({
  reducer: {
    toDo: todoReducer,
    name: nameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
