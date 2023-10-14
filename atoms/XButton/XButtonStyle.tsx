import { Button } from "@mui/material";
import { styled } from "@mui/system";

type ButtonPopType = {
  textColor?: string | null;
  mt?: string | null;
  bgColor?: string | null;
};

export const StyledXButton = styled(Button)(
  ({ textColor = null, mt = null, bgColor = null }: ButtonPopType) => ({
    color: textColor ? textColor : "#000000",
    background: bgColor ? bgColor : "#ffff",
    border: "1px solid rgba(137, 137, 137, 0.40)",
    padding: "0.5rem 0",
    borderRadius: "6px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    textTransform: "capitalize",
    width: "109px",
    marginTop: mt ? mt : "0px",

    "&:hover": {
      background: bgColor ? bgColor : "none",
    },
  })
);
