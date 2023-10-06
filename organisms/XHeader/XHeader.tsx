// lib and others
import Link from "next/link";

// styled component
import { DownArrowIcon, Logo } from "@/atoms/Icons";
import {
  HeaderWrapper,
  LogoContainer,
  MenuItem,
  MenuList,
  ProfileContainer,
  Text,
} from "./XHeaderStyle";
import { Avatar, Box } from "@mui/material";

const XHeader = () => {
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
        <MenuItem>
          <Link href="/">Dashboard</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/user-management">User Management</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/education-management">Education Management</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/report">Report</Link>
        </MenuItem>
      </MenuList>
      <ProfileContainer>
        <Avatar alt="Remy Sharp" />
        <Box marginX={0.5}>
          <Text fontSize="14px" fontWeight={500}>
            Frank C. Gautier
          </Text>
          <Text fontSize="12px" fontWeight={600} color="#565656">
            Admin
          </Text>
        </Box>
        <DownArrowIcon />
      </ProfileContainer>
    </HeaderWrapper>
  );
};

export default XHeader;
