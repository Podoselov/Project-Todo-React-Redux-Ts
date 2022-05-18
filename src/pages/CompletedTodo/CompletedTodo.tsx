import * as React from "react";
import { Container, List, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import TodoComponent from "../../components/TodoComponent/TodoComponent";

const CompletedTodo: React.FunctionComponent = () => {
  const completedTodo = useAppSelector((state) =>
    state.todoReducer.todo.filter((todo) => (todo.completed ? todo : null))
  );

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <List sx={{ width: "50%" }}>
        {completedTodo.length === 0 ? (
          <Typography variant="h4">You have not completed task</Typography>
        ) : (
          completedTodo.map((todo) => (
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

export default CompletedTodo;
