import { Button } from "@mui/material";
import { styled } from "@mui/system";

type ButtonPopType = {
  textColor?: string | null;
  mt?: string | null;
  bgColor?: string | null;
};

export const StyledXButton = styled(Button)(
  ({
    textColor = null,
    mt = null,
    bgColor = null,
  }: ButtonPopType) => ({
    color: textColor ? textColor : "#FFFFFF",
    background: bgColor ? bgColor : "#1A56DB",
    padding: "8px 16px",
    borderRadius: "8px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    textTransform: "capitalize",
    marginTop: mt ? mt : "0px",

    "&.MuiButtonBase-root:hover": {
      background: bgColor ? bgColor : "#1A56DB",
      boxShadow: "none",
    },
  })
);
