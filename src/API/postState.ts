import axios from "axios";
import { ITodo } from "../store/reducers/typeTodo";

const addTodos = async ({ title }: { title: string }) => {
  await axios.post<ITodo[]>(`http://localhost:5000/todos`, {
    userId: Date.now(),
    title,
    completed: false,
  });
};

export default addTodos;
