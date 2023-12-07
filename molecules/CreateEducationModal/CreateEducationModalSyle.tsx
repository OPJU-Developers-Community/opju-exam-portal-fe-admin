import XTextField from "@/atoms/XInputLabel/XInputLabel";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ModalWrapper = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#FFF",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
}));

interface TextProps {
  color?: string;
}
export const Text = styled(Typography)(({ color }: TextProps) => ({
  fontFamily: "Poppins, sans-serif",
  color: color ? color : "#111928",
}));

export const StyledTextField = styled(XTextField)(() => ({
  background: "#F9FAFB",
  borderRadius: "8px",
  width: "100%",
  margin: "0.2rem 0",

  "& .MuiInputBase-root:after": {
    borderBottom: "2px solid #1A56DB",
  },

  "& .MuiInputBase-root:hover": {
    borderBottom: "none",
  },

  "& .MuiInputBase-input": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "#111928",
    padding: "12px 16px",
  },
}));
