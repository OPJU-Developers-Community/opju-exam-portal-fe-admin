import { StyledXButton } from "./XButtonStyle";

// interfaces
export interface XButtonProps {
  children: string;
  startIcon?: JSX.Element;
  mt?: string;
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  sx?: object | null;
  onClick?: any;
  disableRipple?: boolean;
}

const XButton = (props: XButtonProps) => {
  const { children } = props;
  return <StyledXButton {...props}>{children}</StyledXButton>;
};

export default XButton;
