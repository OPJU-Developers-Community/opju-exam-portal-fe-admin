import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    height: "80vh",
    width: "85%",
    boxShadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius: "12px",
    margin: "4rem auto"
})

export const Header = styled("div")({
    padding: "1rem",
    borderBottom: "1px solid #ced4da",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

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
})
