import { styled } from "@mui/system";
import { Button, Link, TextField } from "@mui/material";

export const LoginWrapper = styled("div")({
  display: "flex",
  height: "100vh",
});

export const LeftSection = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RightSection = styled("div")({
  flex: 2,
  backgroundColor: "#f8f9fa",
  display: "flex",
  alignItems: "center",
});

export const LoginBox = styled("div")({
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
    borderBottom: "2px solid #4361ee",
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

export const LoginButton = styled(Button)({
  width: "100%",
  margin: "1rem 0",
  boxShadow: "none",
  backgroundColor: "#4361ee",
  textTransform: "capitalize",
  fontFamily: "Nunito",
  fontSize: 16,
  fontWeight: 500,
  padding: "0.65rem 0",

  "&.MuiButtonBase-root:hover": {
    boxShadow: "none",
    backgroundColor: "#4361ee",
  },
});

export const CreateAccountBox = styled(Link)({
  
})
