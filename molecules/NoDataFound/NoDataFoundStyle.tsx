import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Text = styled(Typography)(() => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#374957",
}));
