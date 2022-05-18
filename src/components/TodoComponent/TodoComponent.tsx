import * as React from "react";
import { IconButton, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { StyledListItem } from "../../pages/TodosPage/styledTodo";
import { useAppDispatch } from "../../hooks/redux";
import {
  changeStatusTodoReducer,
  deleteTodoReducer,
} from "../../store/reducers/todoReducer";
import deleteTodo from "../../API/deleteTodo";

interface TodoProps {
  heading?: number;
  text?: string;
  todoId?: number;
  completed?: boolean;
}

const TodoComponent: React.FunctionComponent<TodoProps> = ({
  heading,
  text,
  todoId,
  completed,
}) => {
  const dispatch = useAppDispatch();

  const handleClickCheckBox = async () => {
    dispatch(changeStatusTodoReducer(todoId));
  };

  const handleClickCloseButton = async () => {
    await deleteTodo(todoId);
    dispatch(deleteTodoReducer(todoId));
  };

  return (
    <StyledListItem
      sx={{
        border: `${completed ? "1px solid green" : "1px solid #3c424a"}`,
      }}
    >
      <IconButton onClick={handleClickCheckBox} color="primary">
        {completed ? (
          <CheckBoxIcon sx={{ color: "gray" }} />
        ) : (
          <CheckBoxOutlineBlankIcon sx={{ color: "gray" }} />
        )}
      </IconButton>
      <ListItemText primary={heading} secondary={text} />
      <IconButton>
        <CloseIcon onClick={handleClickCloseButton} />
      </IconButton>
    </StyledListItem>
  );
};

TodoComponent.defaultProps = {
  heading: 1,
  text: "",
  todoId: 1,
  completed: false,
};

export default TodoComponent;
