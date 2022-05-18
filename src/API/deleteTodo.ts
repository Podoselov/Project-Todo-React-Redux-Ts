import axios from "axios";
import { ITodo } from "../store/reducers/typeTodo";

const deleteTodo = async (idTodo: number | undefined) => {
  try {
    await axios.delete<ITodo[]>(`http://localhost:5000/todos/${idTodo}`);
  } catch (error) {
    console.error(error);
  }
};

export default deleteTodo;
