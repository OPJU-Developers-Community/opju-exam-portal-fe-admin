import { StyledChip } from "./XChipStyle";

// type & interfaces
type XChipPropType = {
  label: string;
  ml?: string;
  mt?: string;
  bgColor?: string;
  textColor?: string;
  onDelete: () => void
};

const XChip = (props: XChipPropType) => {
  return <StyledChip {...props} />;
};

export default XChip;
