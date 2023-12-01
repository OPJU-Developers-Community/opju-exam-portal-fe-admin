import { StyledXButton } from "./XButtonStyle";

// interfaces
export interface XButtonProps {
  children: string;
  startIcon?: JSX.Element;
  mt?: string;
  textColor?: string;
  bgColor?: string;
  onClick?: () => void; 
  fontSize?: string;
  sx?: object | null;
  disableRipple?: boolean;
}

const XButton = (props: XButtonProps) => {
  const { children } = props;
  return <StyledXButton {...props}>{children}</StyledXButton>;
};

export default XButton;
