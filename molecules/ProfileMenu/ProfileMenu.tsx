// lib & others
import Link from "next/link";

// component
import { LogoutIcon, ProfileIcon } from "@/atoms/Icons";
import { Avatar, Box, Menu } from "@mui/material";
import { StyledItemBox, StyledMenuItem, Text } from "./ProfileMenuStyle";

// interfaces
interface profileMenuProp {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

const ProfileMenu = ({ handleClose, anchorEl, open }: profileMenuProp) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter:
            "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.12))",
          mt: 1,
          width: "200px",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 0,
            mr: 0,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 10,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
    >
      <StyledItemBox>
        <Avatar alt="Remy Sharp" />
        <Box marginX={0.5} textAlign="left">
          <Text fontWeight={500} fontSize="14px">
            Frank C. Gautier
          </Text>
          <Text fontSize="12px" fontWeight={600} color="#565656">
            Admin
          </Text>
        </Box>
      </StyledItemBox>
      <Link href="/my-profile">
        <StyledMenuItem onClick={handleClose}>
          <ProfileIcon />
          <Text marginLeft={1} fontSize="14px">
            My Profile
          </Text>
        </StyledMenuItem>
      </Link>
      <StyledMenuItem onClick={handleClose} color="#EF233C">
        <LogoutIcon />
        <Text marginLeft={1} fontSize="14px">
          Logout
        </Text>
      </StyledMenuItem>
    </Menu>
  );
};

export default ProfileMenu;
