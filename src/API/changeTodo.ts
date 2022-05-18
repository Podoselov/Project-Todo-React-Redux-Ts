import axios from "axios";

const changeTodo = async (
  idTodo: number | undefined,
  completed: boolean | undefined,
  title: string | undefined
) => {
  const newTodo = {
    userId: idTodo,
    completed,
    title,
  };
  try {
    return await axios.put(`http://localhost:5000/todos/${idTodo}`, newTodo);
  } catch (error) {
    return console.error(error);
  }
};

export default changeTodo;
