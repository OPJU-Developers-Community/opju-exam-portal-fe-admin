import { Button, FormControl, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  height: "80vh",
  width: "80%",
  margin: "4rem auto",
});

export const StyledButton = styled(Button)({
  // paddingRight: "1rem",
  boxShadow: "none",
  background: "#212529",
  color: "#f8f9fa",
  textTransform: "capitalize",
  fontFamily: "Nunito",
  fontSize: 16,
  fontWeight: 500,
  transition: "transform 200ms linear",

  "&.MuiButtonBase-root:hover": {
    background: "#212529",
    boxShadow: "none",
  },
});

export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FormControlWrapper = styled(FormControl)({
  margin: "1rem 0 0 0",
  fontWeight: 500,
});

export const StyledLabel = styled(FormControlLabel)({
  "& > span": {
    fontFamily: "Nunito",
  },
});
