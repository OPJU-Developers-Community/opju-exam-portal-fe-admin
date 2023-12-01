import { Avatar, Chip, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled("div")(() => ({
  width: "380px",
  maxWidth: "100%",
  background: "#FFF",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
}));

export const CardHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
}));

interface TextProps {
  color?: string;
}
export const Text = styled(Typography)(({ color }: TextProps) => ({
  fontFamily: "Poppins, sans-serif",
  color: color ? color : "#111928",
}));

export const StyledIconButton = styled(IconButton)(() => ({
  "&.MuiButtonBase-root:hover svg": {
    color: "#E02424",
  },
}));

export const CardBody = styled("div")(() => ({
  marginTop: "1rem",
}));

export const StyledText = styled(Typography)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#5521B5",
}));

export const ContentBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CourseDetailBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
}));
