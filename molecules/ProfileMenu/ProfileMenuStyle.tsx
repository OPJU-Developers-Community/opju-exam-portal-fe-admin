import { MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface styledMenuItemProp {
  color?: string;
}
export const StyledMenuItem = styled(MenuItem)(
  ({ color }: styledMenuItemProp) => ({
    color: color ? color : "#000",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid rgba(118, 118, 118, 0.20)",
    padding: "15px 10px",
  })
);

export const Text = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
});

export const StyledItemBox = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "3px 6px",
  marginBottom: "0.5rem",
  cursor: "default",
});
