// lib & others

// hoc
import withAuth from "@/hoc/withAuth";
import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";

// components
import EducationManagementTemplate from "@/templates/EducationManagementtemplate/EducationManagementTemplate";

// redux

const EducationManagement = () => {
  return;
  <CommonTemplate>
    <EducationManagementTemplate />
  </CommonTemplate>;
};

export default withAuth(EducationManagement);
