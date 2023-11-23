import {
  Button,
  InputAdornment,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "1px solid  #6B7280",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
};

export const ModalTitle = styled(Typography)({
  fontWeight: "600",
  fontFamily: "Poppins, 'sans-serif'",
  fontSize: "1.25rem",
});

export const LabelText = styled(Typography)({
  color: "#111928",
  fontSize: "1rem",
  fontWeight: "500",
  fontFamily: "Poppins, 'sans-serif'",
});

export const SelectBox = styled(Select)`
    border: "1px solid black",
    height: "52px"
`;

export const CreateButton = styled(Button)({
  border: "1px solid black",
  margin: "1rem 0rem 0rem 0rem",
  width: "100%",
});

export const FormField = styled(TextField)({
  "& .MuiInputBase-root": {
    fontFamily: "Poppins, 'sans-serif'",
    borderRadius: "8px",
    background: "#F9FAFB",
    border: "1px solid #D1D5DB",
  },

  "& .MuiFilledInput-root:hover": {
    background: "#F9FAFB",
  },

  "& .MuiFilledInput-input": {
    paddingTop: "7px",
  },

  "& .MuiFilledInput-root:before": {
    border: "none",
  },

  "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before ": {
    border: "none",
  },

  "& .MuiFilledInput-root:after": {
    border: "none",
  },

  "& .MuiInputAdornment-root.MuiInputAdornment-positionStart.css-9mc7sf-MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)":{
    marginTop: "0px"
  }
});
