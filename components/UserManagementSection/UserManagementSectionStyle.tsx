import { Button, Chip } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  height: "80vh",
  width: "80%",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  borderRadius: "12px",
});

export const Header = styled("div")({
  padding: "1rem",
  borderBottom: "1px solid #ced4da",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledButton = styled(Button)({
  paddingRight: "1rem",
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

export const Body = styled("div")({});

export const Card = styled("div")({
  padding: "0.5rem 1rem",
  borderBottom: "1px solid #ced4da",

  "&:hover": {
    background: "#e9ecef",
  },
});

export const CardHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LeftSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const KebabMenuBox = styled("div")({
  cursor: "pointer",
});

export const CardBody = styled("div")({
  padding: "1rem 0 0.7rem 0",
});

export const StyledChip = styled(Chip)({
  background: "#4361ee",
  border: "none",
  fontFamily: "Nunito",
  fontWeight: 500,
  color: "#f8f9fa",
  margin: "0.5rem 0.3rem 0 0",
});

export const SkeletonWrapper = styled("div")({
  padding: "0.5rem 1rem",
  borderBottom: "1px solid #ced4da",

  "&:hover": {
    background: "#e9ecef",
  },
});
