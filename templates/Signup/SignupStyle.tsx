import { Button, OutlinedInput, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SignupWrapper = styled("div")({
  display: "flex",
  height: "100vh",
});

export const FlexContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const LeftSection = styled("div")({
  width: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#4361ee",
  padding: "0 3rem",
});

export const Text = styled(Typography)({
  color: "#f8f9fa",
  fontFamily: "Poppins, sans-serif",
});

export const RightSection = styled("div")({
  width: "70%",
  backgroundColor: "#f8f9fa",
  display: "flex",
  alignItems: "center",
});

export const SigupBox = styled("div")({
  height: "50vh",
  width: "100%",
  maxWidth: "400px",
  margin: "0 0 0 5rem",
});

export const Title = styled("h1")({
  margin: 0,
  padding: 0,
  color: "#212529",
  fontWeight: 600,
});

export const SubTitle = styled("h3")({
  margin: "0rem 0",
  padding: 0,
  color: "#343a40",
  fontWeight: 500,
});

export const SignupButton = styled(Button)({
  width: "100%",
  margin: "0.5rem 0",
  padding: "10px 20px",
  boxShadow: "none",
  background: "#4361ee",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  borderRadius: "8px",
  textTransform: "none",

  "&.MuiButtonBase-root:hover": {
    backgroundColor: "#4361ee",
    boxShadow: "none",
  },
});
