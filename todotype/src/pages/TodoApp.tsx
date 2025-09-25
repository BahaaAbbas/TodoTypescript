import { Box, Chip, Container } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import styles from "./TodoApp.module.css";
import { StyledSubtitle, StyledTitle } from "../styled/TodoApp.styled";
import AddTodo from "./AddTodo";
import { useState } from "react";
import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <Box className={styles.container}>
      <Container maxWidth="md" sx={{ px: 2 }}>
        {/* Header */}
        <Box className={styles.header}>
          <StyledTitle variant="h2" className={styles.title}>
            Todo App
          </StyledTitle>
          <StyledSubtitle variant="h5" className={styles.subtitle}>
            Stay organized and get things done
          </StyledSubtitle>
        </Box>

        {/* Stats */}
        {totalCount > 0 && (
          <Box className={styles.stats}>
            <Chip
              icon={<AssignmentIcon />}
              label={`${totalCount} Total`}
              variant="outlined"
              sx={{
                "& .MuiChip-icon": {
                  color: "#ef4444",
                },
              }}
              className={styles.chip}
            />

            <Chip
              icon={<CheckCircleIcon />}
              label={`${completedCount} Completed`}
              variant="outlined"
              sx={{
                "& .MuiChip-icon": {
                  color: "#10eb6b",
                },
              }}
              className={styles.chip}
            />
          </Box>
        )}

        {/* Add Todo */}
        <AddTodo onAdd={addTodo} />

        {/*  Todo Item */}
        {todos.length === 0 ? (
          <Box className={styles.header}>
            <StyledTitle variant="h4" className={styles.title}>
              No todos yet
            </StyledTitle>
            <StyledSubtitle variant="h5" className={styles.subtitle}>
              Add your first task above to get started!
            </StyledSubtitle>
          </Box>
        ) : (
          <>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </>
        )}
      </Container>
    </Box>
  );
};

export default TodoApp;
