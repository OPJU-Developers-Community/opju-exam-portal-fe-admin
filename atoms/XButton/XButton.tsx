import { Box, CircularProgress, Hidden } from "@mui/material";
import { StyledXButton } from "./XButtonStyle";

// interfaces
export interface XButtonProps {
  children: string;
  startIcon?: JSX.Element;
  mt?: string;
  textColor?: string;
  bgColor?: string;
  sx?: object | null;
  onClick?: any;
  disableRipple?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const XButton = (props: XButtonProps) => {
  const { children, isLoading } = props;
  return (
    <StyledXButton {...props}>
      {isLoading ? (
        <CircularProgress
          sx={{
            height: "10px",
            color: "#F9FAFB",
          }}
          size={30}
        />
      ) : (
        children
      )}
    </StyledXButton>
  );
};

export default XButton;
