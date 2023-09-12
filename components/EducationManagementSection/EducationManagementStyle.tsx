import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  width: "85vw",
  margin: "4.5rem auto",
})

export const StyledButton = styled(Button)({
  paddingRight: "1rem",
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
})