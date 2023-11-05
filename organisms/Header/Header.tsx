// lib and others
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

// styled component
import { DownArrowIcon, Logo, UpArrowIcon } from "@/atoms/Icons";
import {
  HeaderWrapper,
  LogoContainer,
  MenuItem,
  MenuList,
  ProfileContainer,
  Text,
} from "./HeaderStyle";
import ProfileMenu from "@/molecules/ProfileMenu/ProfileMenu";
import { Avatar, Box } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

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
        <Link href="/">
          <MenuItem className={router.pathname === "/" ? "active" : ""} data-test="dashboard-route">
            Dashboard
          </MenuItem>
        </Link>
        <Link href="/user-management">
          <MenuItem
            className={router.pathname === "/user-management" ? "active" : ""}
          >
            User Management
          </MenuItem>
        </Link>
        <Link href="/education-management">
          <MenuItem
            className={
              router.pathname === "/education-management" ? "active" : ""
            }
          >
            Education Management
          </MenuItem>
        </Link>
        <Link href="/report">
          <MenuItem className={router.pathname === "/report" ? "active" : ""}>
            Report
          </MenuItem>
        </Link>
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

export default Header;
