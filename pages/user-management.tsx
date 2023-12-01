// hoc
import withAuth from "@/hoc/withAuth";
import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";

// template
import UserManagementTemplate from "@/templates/UserManagementTemplate/UserManagementTemplate";

const UserManagement = () => {
  return (
    <CommonTemplate>
      <UserManagementTemplate />
    </CommonTemplate>
  );
};

export default withAuth(UserManagement);
