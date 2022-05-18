import * as React from "react";
import { useParams } from "react-router";
import { Container, List, Typography } from "@mui/material";
import TodoComponent from "../../components/TodoComponent/TodoComponent";
import { useAppSelector } from "../../hooks/redux";

const TodoPage = () => {
  const params = useParams();
  const todo = useAppSelector((state) =>
    state.todoReducer.todo.filter((element) => element.id === Number(params.id))
  );

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <List sx={{ width: "50%" }}>
        {todo.length > 0 ? (
          <TodoComponent
            heading={todo[0].id}
            text={todo[0].title}
            completed={todo[0].completed}
            todoId={todo[0].id}
            key={todo[0].userId}
          />
        ) : (
          <Typography
            sx={{ textAlign: "center", padding: "20px" }}
            variant="h4"
          >
            No such task
          </Typography>
        )}
      </List>
    </Container>
  );
};

export default TodoPage;
