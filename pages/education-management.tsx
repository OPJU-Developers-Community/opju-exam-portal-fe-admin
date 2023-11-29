// lib & others

// hoc
import withAuth from "@/hoc/withAuth";

// components
import EducationManagementTemplate from "@/templates/EducationManagementtemplate/EducationManagementTemplate";

// redux

const EducationManagement = () => {
  return <EducationManagementTemplate />
};

export default withAuth(EducationManagement);
