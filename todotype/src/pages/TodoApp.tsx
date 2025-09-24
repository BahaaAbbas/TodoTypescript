import { Box, Chip, Container } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import styles from "./TodoApp.module.css";
import { StyledSubtitle, StyledTitle } from "../styled/TodoApp.styled";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const totalCount: number = 1;
  const completedCount: number = 2;

  const addTodo = (text: string) => {
    console.log(text);
  };

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
              icon={<AssignmentIcon className={styles.chipIconTotal} />}
              label={`${totalCount} Total`}
              variant="outlined"
              className={styles.chip}
            />
            <Chip
              icon={<CheckCircleIcon className={styles.chipIconCompleted} />}
              label={`${completedCount} Completed`}
              variant="outlined"
              className={styles.chip}
            />
          </Box>
        )}

        {/* Add Todo */}
        <AddTodo onAdd={addTodo} />
      </Container>
    </Box>
  );
};

export default TodoApp;
