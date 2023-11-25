import { InputLabel, OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";

export const StyledInputLable = styled(InputLabel)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#111928",
  fontSize: "14px",
});

type styledInputFieldType = {
  isIcon: string;
};
export const StyledInputField = styled(OutlinedInput)(
  ({ isIcon }: styledInputFieldType) => ({
    width: "100%",
    margin: "0.5rem 0 1rem 0",
    background: "#F9FAFB",
    borderRadius: "8px",

    "& .MuiInputBase-root:after": {
      borderBottom: "2px solid #1A56DB",
    },

    "& .MuiInputBase-root:hover": {
      borderBottom: "none",
    },

    "& .MuiInputBase-input": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      color: "#111928",
      padding: isIcon ? "14px 10px" : "14px 16px",
    },
  })
);
