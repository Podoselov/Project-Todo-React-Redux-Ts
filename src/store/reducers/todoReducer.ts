import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./typeTodo";
import getAllTodos from "../../API/getState";
import changeTodo from "../../API/changeTodo";

const initialState: Todo = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteTodoReducer(state, action) {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    changeStatusTodoReducer(state, action) {
      state.todo.map(async (todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          await changeTodo(todo.id, todo.completed, todo.title);
        }
        return todo;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todo = action.payload;
    });
  },
});

export const { deleteTodoReducer, changeStatusTodoReducer } = todoSlice.actions;
export default todoSlice.reducer;
