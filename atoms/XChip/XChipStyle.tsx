import { Chip } from "@mui/material";
import { styled } from "@mui/system";

type ChipPopType = {
  ml?: string | null;
  mt?: string | null;
  bgColor?: string | null;
  textColor?: string | null;
};

export const StyledChip = styled(Chip)(
  ({
    ml = null,
    mt = null,
    bgColor = null,
    textColor = null,
  }: ChipPopType) => ({
    borderRadius: "6px",
    padding: "0.125rem 0.1875rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    marginLeft: ml ? ml : "0",
    marginTop: mt ? mt : "0",
    background: bgColor ? bgColor : "#E5EDFF",
    color: textColor ? textColor : "#42389D",
    cursor: "default",
  })
);
