import * as React from "react";
import { useCallback, useEffect } from "react";
import { Container, List, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TodoComponent from "../../components/TodoComponent/TodoComponent";
import getAllTodos from "../../API/getState";

const TodosPage: React.FunctionComponent = () => {
  const todosList = useAppSelector((state) => state.todoReducer.todo);

  const dispatch = useAppDispatch();

  const getAllTask = useCallback(() => {
    dispatch(getAllTodos());
  }, []);

  useEffect(() => {
    return () => {
      getAllTask();
    };
  }, [getAllTask]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <List sx={{ width: "50%" }}>
        {todosList.length === 0 ? (
          <Typography variant="h4">You have not added any tasks yet</Typography>
        ) : (
          todosList.map((todo) => (
            <TodoComponent
              heading={todo.id}
              text={todo.title}
              todoId={todo.id}
              key={todo.userId}
              completed={todo.completed}
            />
          ))
        )}
      </List>
    </Container>
  );
};

export default TodosPage;
