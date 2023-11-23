import { Button, TextField, Typography } from "@mui/material";
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
  margin: "1rem 0",
  padding: 0,
  color: "#343a40",
  fontWeight: 500,
});

export const InputField = styled(TextField)({
  width: "100%",
  margin: "1.13rem 0",

  "& .MuiFormLabel-root": {
    fontFamily: "Nunito",
    fontWeight: 500,
    fontSize: 16,

    "&.Mui-focused": {
      color: "#4361ee",
    },
  },

  "& .MuiInputBase-root:after": {
    borderBottom: "2px solid #4361ee", // Remove the underline when the input is focused
  },

  "& .MuiInputBase-root:hover": {
    borderBottom: "none", // Remove the underline when the input is focused
  },

  "& .MuiInputBase-input": {
    fontFamily: "Nunito",
    fontWeight: 500,
    fontSize: 16,
  },
});

export const SignupButton = styled(Button)({
  width: "100%",
  margin: "1rem 0",
  padding: "0.65rem 0",
  boxShadow: "none",
  background: "#4361ee",
  textTransform: "capitalize",
  fontFamily: "Nunito",
  fontSize: 16,
  fontWeight: 500,
  transition: "transform 200ms linear",

  "&.MuiButtonBase-root:hover": {
    backgroundColor: "#4361ee",
    boxShadow: "none",
  },
});
