import { Box, InputAdornment } from "@mui/material";
import { StyledInputField, StyledInputLable } from "./XInputLabelStyle";

const XTextField = (props: any) => {
  const { label, startIcon, endIcon, styles, showPassword, ...otherProp } =
    props;
  return (
    <Box sx={...styles}>
      <StyledInputLable>{label}</StyledInputLable>
      <StyledInputField
        isIcon={startIcon ? true : false}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : null
        }
        type={showPassword ? "text" : "password"}
        {...otherProp}
      />
    </Box>
  );
};

export default XTextField;
