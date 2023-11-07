import { Card, Typography } from "@mui/material";
import {styled} from "@mui/system";

export const MainCard = styled(Card)({
    background: "#f9f9f9",
    borderRadius: "13px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    boxShadow: "none",
    width: "400px",
    height: "250px",
})

export const StyledBox = styled("div")({
    display: "flex",
    marginTop: ".5rem",
    gap: "1rem",
})

export const CourseBox = styled("div")({
    display:"flex",
    flexDirection: "column",
})

export const Title = styled(Typography)({
    fontFamily: "Poppins, sans-serif",
    color: "#6B6B6B",
    fontSize: "1rem"
})

export const SubTitle = styled(Typography)({
    fontFamily: "Poppins, sans-serif",
    color: "#000",
    fontSize: "1.2rem",
    fontWeight: "400",
})

export const SubjectContainer = styled("div")({
    marginTop: ".5rem",
})

export const ChipBox = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: ".75rem",
    alignItems: "center",
})

export const ShowChipsButton = styled(Typography)({
    cursor: "pointer",
    textDecoration: "underline",
    color: "#3A86FF",
})