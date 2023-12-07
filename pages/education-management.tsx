// lib & others

// hoc
import withAuth from "@/hoc/withAuth";

// components
import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";
import EducationManagementTemplate from "@/templates/EducationManagementTemplate/EducationManagementTemplate";

// redux

const EducationManagement = () => {
  return (
    <CommonTemplate>
      <EducationManagementTemplate />
    </CommonTemplate>
  );
};

export default withAuth(EducationManagement);
