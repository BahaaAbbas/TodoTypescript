import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { TodoItemProps } from "../types/todo";
import {
  DeleteButton,
  StyledListItem,
  TodoText,
} from "../styled/TodoApp.styled";

const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <StyledListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        sx={{
          color: "#2e7d32",
          "&.Mui-checked": {
            color: "#2e7d32",
          },
        }}
      />
      <TodoText primary={todo.text} completed={todo.completed} />
      <DeleteButton onClick={() => onDelete(todo.id)}>
        <DeleteIcon />
      </DeleteButton>
    </StyledListItem>
  );
};

export default TodoItem;
