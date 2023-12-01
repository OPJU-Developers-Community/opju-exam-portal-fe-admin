import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  padding: "2rem 3rem 0 3rem",
  position: "relative",
});

export const StyledContainer = styled("div")({
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "7rem 0 1rem 0",
  background: "#f8f9fa",
  zIndex: "1",
});

export const PageTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
});

export const ControlContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
  width: "calc(90% - 5rem)",
});

export const StyledBox = styled("div")({
  marginTop: "11rem",
});
