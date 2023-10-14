import { StyledChip } from "./XChipStyle";

// type & interfaces
type XChipPropType = {
  label: string;
  ml?: string;
  mt?: string;
  bgColor?: string;
  textColor?: string;
};

const XChip = (props: XChipPropType) => {
  return <StyledChip {...props} />;
};

export default XChip;
