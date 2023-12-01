import { Chip } from "@mui/material";
import { styled } from "@mui/system";

type ChipPopType = {
  ml?: string | null;
  mt?: string | null;
  mr?: string | null;
  bgColor?: string | null;
  textColor?: string | null;
  fontSize?: string | null;
};

export const StyledChip = styled(Chip)(
  ({
    ml = null,
    mt = null,
    mr = null,
    bgColor = null,
    textColor = null,
    fontSize = null,
  }: ChipPopType) => ({
    borderRadius: "8px",
    padding: "0.5rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: fontSize ? fontSize : "16px",
    marginLeft: ml ? ml : "0",
    marginRight: mr ? mr : "0",
    marginTop: mt ? mt : "0",
    background: bgColor ? bgColor : "#E5EDFF",
    color: textColor ? textColor : "#42389D",
    cursor: "default",
  })
);
