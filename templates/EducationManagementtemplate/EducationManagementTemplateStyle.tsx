import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  height: "100vh",
});

export const StyledContainer = styled("div")({
  padding: "4rem 42px 0 42px",
});

export const PageTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
});

export const ControlContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
});

export const StyledBox = styled("div")(({ theme }) => ({
  marginTop: "3rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  padding: "0px 0px 20px 0px",
  [theme.breakpoints.down("md")]:{
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.down("sm")]:{
    gridTemplateColumns: "repeat(1, 1fr)"
  }
}));
