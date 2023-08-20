// lib & others
import { useState } from "react";
import { useRouter } from "next/router";
import { navLinks } from "@/utils/constants";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// thunk and slices
import { logOut } from "@/redux/slices/authSlice";

// icons
import { LogoutIcon, SettingIcon } from "@/utils/icons";

// components

// styled-components
import {
  BlueDotIcon,
  Container,
  DivContainer,
  Divider,
  DropDownMenu,
  LinkItem,
  NavBarLogo,
  NavBarWrapper,
  ProfileMenuItem,
  UserProfileIcon,
} from "./NavbarStyle";

const NavBar = () => {
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

  const dispatch = useDispatch<any>();

  const router = useRouter();

  const handleDropDownMenu = () => {
    setToggleDropDownMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <NavBarWrapper>
      <Container>
        <NavBarLogo variant="h5">Admin</NavBarLogo>
        {navLinks.map((item, i) => (
          <LinkItem href={item.path} key={i}>
            {item.name}
            {item.path === router.pathname ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <BlueDotIcon />
              </motion.div>
            ) : null}
          </LinkItem>
        ))}
      </Container>
      <DivContainer>
        <UserProfileIcon onClick={handleDropDownMenu}>u</UserProfileIcon>
        {toggleDropDownMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: "20%" }}
            transition={{ duration: 0.5 }}
          >
            <DropDownMenu>
              <ProfileMenuItem href="/settings">
                <SettingIcon />
                Settings
              </ProfileMenuItem>
              <Divider />
              <ProfileMenuItem href="/login" linktype="logout" onClick={handleLogout}>
                <LogoutIcon />
                Log out
              </ProfileMenuItem>
            </DropDownMenu>
          </motion.div>
        )}
      </DivContainer>
    </NavBarWrapper>
  );
};

export default NavBar;
