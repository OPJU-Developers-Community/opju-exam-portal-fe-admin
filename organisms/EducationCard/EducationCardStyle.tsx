import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const MainCard = styled(Card)({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "1px solid #E5E7EB",
  background: "#FFF",
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
});

export const StyledBox = styled("div")({
  display: "flex",
  marginTop: ".5rem",
  gap: "1rem",
});

export const CourseBox = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const Title = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#6B6B6B",
  fontSize: "1rem",
});

export const SubTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#000",
  fontSize: "1.5rem",
  // fontWeight: "600",
});

export const SubjectContainer = styled("div")({
  marginTop: ".5rem",
});

export const ChipBox = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: ".75rem",
  alignItems: "center",
  marginTop: ".5rem"
});

export const ShowChipsButton = styled(Typography)({
  cursor: "pointer",
  color: "#3A86FF",
});
