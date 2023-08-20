// hoc
import withAuth from "@/hoc/withAuth";

// components
import NavBar from "@/components/NavBar/NavBar";
import UserManagementSection from "@/components/UserManagementSection/UserManagementSection";
import { Wrapper } from "./styles/UserManagementPageStyle";

// utils
import { userManagementUsers } from "@/utils/constants";

const UserManagement = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        {userManagementUsers.map((userType, index) => (
          <UserManagementSection title={userType} key={index} />
        ))}
      </Wrapper>
    </>
  );
};

export default withAuth(UserManagement);
