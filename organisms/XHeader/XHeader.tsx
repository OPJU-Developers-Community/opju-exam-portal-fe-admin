// lib and others
import Link from "next/link";
import { useState } from "react";

// styled component
import { DownArrowIcon, Logo, UpArrowIcon } from "@/atoms/Icons";
import {
  HeaderWrapper,
  LogoContainer,
  MenuItem,
  MenuList,
  ProfileContainer,
  Text,
} from "./XHeaderStyle";
import ProfileMenu from "@/molecules/ProfileMenu/ProfileMenu";
import { Avatar, Box } from "@mui/material";

const XHeader = () => {
  const [currentNavItem, setCurrentNavItem] = useState("dashboard");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo />
        <Link href="/">
          <Text fontSize="22px" fontWeight={700} marginLeft={0.5}>
            ExamPoint
          </Text>
        </Link>
      </LogoContainer>
      <MenuList>
        <MenuItem
          className={currentNavItem === "dashboard" ? "active" : ""}
          onClick={() => setCurrentNavItem("dashboard")}
        >
          <Link href="/">Dashboard</Link>
        </MenuItem>
        <MenuItem
          className={currentNavItem === "user_management" ? "active" : ""}
          onClick={() => setCurrentNavItem("user_management")}
        >
          <Link href="/user-management">User Management</Link>
        </MenuItem>
        <MenuItem
          className={currentNavItem === "education_management" ? "active" : ""}
          onClick={() => setCurrentNavItem("education_management")}
        >
          <Link href="/education-management">Education Management</Link>
        </MenuItem>
        <MenuItem
          className={currentNavItem === "report" ? "active" : ""}
          onClick={() => setCurrentNavItem("report")}
        >
          <Link href="/report">Report</Link>
        </MenuItem>
      </MenuList>
      <ProfileContainer onClick={handleClick} disableRipple>
        <Avatar alt="Remy Sharp" />
        <Box marginX={0.5} textAlign="left" textTransform="capitalize">
          <Text fontSize="14px" fontWeight={500}>
            Frank C. Gautier
          </Text>
          <Text fontSize="12px" fontWeight={600} color="#565656">
            Admin
          </Text>
        </Box>
        {open ? <UpArrowIcon /> : <DownArrowIcon />}
      </ProfileContainer>
      <ProfileMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </HeaderWrapper>
  );
};

export default XHeader;
