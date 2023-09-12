import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const ModalWrapper = styled("div")`
  padding: 1rem 1.5rem;
  border-radius: 13px;
  width: 400;
  box-shadow: 24;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
`;

export const InputField = styled(TextField)({
    width: "100%",
    margin: "1.13rem 0",

    "& .MuiFormLabel-root": {
        fontFamily: "Nunito",
        fontWeight: 500,
        fontSize: 16,

        "&.Mui-focused": {
            color: "#4361ee",
        },
    },

    "& .MuiInputBase-root:after": {
        borderBottom: "2px solid #4361ee",
    },

    "& .MuiInputBase-root:hover": {
        borderBottom: "none", // Remove the underline when the input is focused
    },

    "& .MuiInputBase-input": {
        fontFamily: "Nunito",
        fontWeight: 500,
        fontSize: 16,
    },
});

export const InputWrapper = styled("div")({
    display: "flex",
    gap: "1rem",
})

export const SaveButton = styled(Button)({
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