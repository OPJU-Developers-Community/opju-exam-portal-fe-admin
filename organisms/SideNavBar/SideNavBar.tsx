// lib
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// components
import {
  DrawerHeader,
  FlexContainer,
  ListLink,
  NavBarDrawer,
  NavBarTop,
  NavListContainer,
  ProfileContainer,
  SideNavBarWrapper,
  StyledIconBtn,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  Text,
} from "./SideNavBarStyle";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";

// utils, icons
import {
  IconBuddyArrowCloseIcon,
  IconBuddyLogoutIcon,
  IconBuddyMenuIcon,
} from "@/atoms/Icons";
import { defaultProfilePic, navLinks } from "@/utils/constants";

// types
import { ComponentChildrenProps } from "@/types/index.type";

// redux actions
import { logOut } from "@/redux/slices/authSlice";

const SideNavBar = ({ children }: ComponentChildrenProps) => {
  const [open, setOpen] = useState(false);
  const [profileName, setProfileName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let profileName = localStorage.getItem("username");
    if (profileName) {
      setProfileName(JSON.parse(profileName));
    } else {
      setProfileName("Dummy user");
    }
  }, []);

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    dispatch(logOut());
    router.push("/login");
  };

  return (
    <SideNavBarWrapper>
      <NavBarTop position="fixed" open={open}>
        <Toolbar>
          <FlexContainer>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledIconBtn
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                open={open}
                edge="start"
              >
                <IconBuddyMenuIcon />
              </StyledIconBtn>
              {/* {!open && (
                <Typography variant="body1" fontWeight={600} color="#000" ml={2}>
                  ExamPortal
                </Typography>
              )} */}
            </Box>
            <ProfileContainer>
              <Avatar alt="Remy Sharp" src={defaultProfilePic} />
              <Box marginX={0.5} textAlign="left" textTransform="capitalize">
                <Text fontSize="14px" fontWeight={500}>
                  {profileName}
                </Text>
                <Text fontSize="12px" fontWeight={600} color="#565656">
                  Admin
                </Text>
              </Box>
            </ProfileContainer>
          </FlexContainer>
        </Toolbar>
      </NavBarTop>
      <NavBarDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" fontWeight={600}>
            ExamPortal
          </Typography>
          <StyledIconBtn aria-label="close drawer" onClick={handleDrawerClose}>
            <IconBuddyArrowCloseIcon />
          </StyledIconBtn>
        </DrawerHeader>
        <NavListContainer>
          <StyledList>
            {navLinks.map((item, i) => (
              <StyledListItem key={i}>
                <StyledListItemButton
                  open={open}
                  onClick={() => navigateToPage(item.path)}
                  isCurrentPath={router.pathname === item.path ? true : false}
                  disableRipple
                >
                  <StyledListItemIcon open={open}>
                    {item.icon}
                  </StyledListItemIcon>
                  {open && <ListLink>{item.name}</ListLink>}
                </StyledListItemButton>
              </StyledListItem>
            ))}
          </StyledList>
          <StyledList>
            <StyledListItem>
              <StyledListItemButton
                open={open}
                onClick={handleLogout}
                isLogoutBtn={true}
                disableRipple
              >
                <StyledListItemIcon open={open}>
                  {<IconBuddyLogoutIcon />}
                </StyledListItemIcon>
                {open && <ListLink>Log out</ListLink>}
              </StyledListItemButton>
            </StyledListItem>
          </StyledList>
        </NavListContainer>
      </NavBarDrawer>
      {children}
    </SideNavBarWrapper>
  );
};

export default SideNavBar;
