import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

export const NavBarWrapper = styled("div")({
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5rem",
});

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const NavBarLogo = styled(Typography)({
  color: "#212529",
  fontFamily: "Nunito",
  fontWeight: 700,
  marginRight: "1.5rem",
  cursor: "none",
});

export const LinkItem = styled(Link)({
  color: "#212529",
  fontsize: "1rem",
  marginLeft: "1.5rem",
  padding: "1rem 1rem",
  fontWeight: 600,
  position: "relative",
});

export const BlueDotIcon = styled("div")({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translate(-50%, 0)",
  backgroundColor: "#4361ee",
  borderRadius: "50px",
  height: "5px",
  width: "5px",
});

export const UserProfileIcon = styled(Avatar)({
  cursor: "pointer",
});

export const DivContainer = styled("div")({
  position: "relative",
});

export const DropDownMenu = styled("div")({
  position: "absolute",
  bottom: "-9rem",
  right: "0",
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  padding: "0.8rem 0.5rem",
  borderRadius: 4,
  zIndex: "100",
});

export const ProfileMenuItem = styled(Link)(
  ({ linktype }: { linktype?: string }) => ({
    fontSize: "1rem",
    color: linktype === "logout" ? "#ef233c" : "#212529",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    padding: "0.6rem 2rem 0.6rem 0.2rem",
    margin: "0.2rem 0",
  })
);

export const Divider = styled("div")({
  width: "100%",
  height: "1px",
  background: "#212529",
  opacity: 0.1,
});
