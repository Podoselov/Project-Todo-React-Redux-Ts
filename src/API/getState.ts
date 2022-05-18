import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo } from "../store/reducers/typeTodo";

const getAllTodos = createAsyncThunk("todos", async () => {
  const response = await axios.get<ITodo[]>(
    `http://localhost:5000/todos?_limit=50`
  );
  return response.data;
});

export default getAllTodos;
