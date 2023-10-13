// hoc
import withAuth from "@/hoc/withAuth";

// template
import UserManagementTemplate from "@/templates/UserManagementTemplate/UserManagementTemplate";

const userManagement = () => {
  return <UserManagementTemplate />;
};

export default withAuth(userManagement);
