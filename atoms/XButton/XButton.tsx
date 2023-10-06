import { StyledXButton } from "./XButtonStyle";

// interfaces
export interface XButtonProps {
  children: string;
}

const XButton = (props: XButtonProps) => {
  const { children } = props;
  return <StyledXButton>{children}</StyledXButton>;
};

export default XButton;
