import { Box, Button, Paper, TextField } from "@mui/material";
import type { AddTodoProps } from "../types/todo.ts";
import styles from "./AddTodo.module.css";
import { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };
  return (
    <Paper className={styles.container} sx={{ bgcolor: "#af8b8b" }}>
      <Box
        component="form"
        className={styles.form}
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 2, alignItems: "center" }}
      >
        <TextField
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          className={styles.input}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={!text.trim()}
          startIcon={<AddIcon />}
          className={styles.button}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;
