import { styled } from "@mui/material/styles";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: "1rem",
});

export const StyledSubtitle = styled(Typography)({
  fontWeight: 400,
  fontSize: "1.25rem",
  margin: 0,
});

export const StyledListItem = styled(ListItem)(() => ({
  border: "1px solid #ac8888ff",
  borderRadius: "8px",
  marginBottom: "8px",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#cababaff",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

export const TodoText = styled(ListItemText)<{ completed?: boolean }>(
  ({ completed }) => ({
    textDecoration: completed ? "line-through" : "none",
    opacity: completed ? 0.6 : 1,
    color: completed ? "#2e7d32" : "#212121",
    fontWeight: 500,
  })
);

export const DeleteButton = styled(IconButton)(() => ({
  color: "#d32f2f",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "#f28b82",
    color: "#ffffff",
  },
}));
