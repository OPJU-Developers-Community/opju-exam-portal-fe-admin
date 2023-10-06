import { Typography } from "@mui/material";
import { styled } from "@mui/system";

interface TextProp {
  color?: string;
}

export const HeaderWrapper = styled("div")({
  height: "60px",
  borderBottom: "1px solid rgba(65, 65, 65, 0.20)",
  background: "#FFF",
  padding: "0 42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Text = styled(Typography)(({ color }: TextProp) => ({
  fontFamily: "Poppins, sans-serif",
  color: color ? color : "#000",
}));

export const MenuList = styled("ul")({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
});

export const MenuItem = styled("li")({
  listStyle: "none",
  margin: "0 0.9rem",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "calc(10px - 29px)",
    left: 0,
    height: "3px",
    width: "100%",
    background: "#0083FF",
  },
});

export const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});
