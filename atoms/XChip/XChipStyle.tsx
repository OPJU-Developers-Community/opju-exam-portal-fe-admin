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
    borderRadius: "7px",
    padding: "0.5rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    marginLeft: ml ? ml : "0",
    marginTop: mt ? mt : "0",
    background: bgColor ? bgColor : "#7B2CBF",
    color: textColor ? textColor : "#fff",
    cursor: "default",
  })
);
