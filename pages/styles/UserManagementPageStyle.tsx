import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "calc(100vh - 64px)",
  maxHeight: "100%",
  padding: "0 5rem",
});
