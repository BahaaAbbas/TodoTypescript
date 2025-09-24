import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Assignment as AssignmentIcon } from "@mui/icons-material";

export const StyledTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: "1rem",
});

export const StyledSubtitle = styled(Typography)({
  fontWeight: 400,
  fontSize: "1.25rem",
  margin: 0,
});

export const StyledEmptyIcon = styled(AssignmentIcon)({
  fontSize: "3.75rem",
});

export const StyledEmptyTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: "1.25rem",
  marginBottom: "0.5rem",
});

export const StyledEmptyDescription = styled(Typography)({
  opacity: 0.8,
  fontSize: "0.875rem",
  margin: 0,
});
