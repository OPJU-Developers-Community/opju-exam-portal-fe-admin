// lib & others
import { useRouter } from "next/router";

// components
import { navLinks } from "@/utils/constants";
import {
  BlueDotIcon,
  Container,
  LinkItem,
  NavBarLogo,
  NavBarWrapper,
  UserProfileIcon,
} from "./NavbarStyle";

const NavBar = () => {
  const router = useRouter();

  return (
    <NavBarWrapper>
      <Container>
        <NavBarLogo variant="h5">Admin</NavBarLogo>
        {navLinks.map((item, i) => (
          <>
            <LinkItem href={item.path} key={i}>
              {item.name}
              {item.path === router.pathname ? <BlueDotIcon /> : null}
            </LinkItem>
          </>
        ))}
      </Container>
      <UserProfileIcon>u</UserProfileIcon>
    </NavBarWrapper>
  );
};

export default NavBar;
