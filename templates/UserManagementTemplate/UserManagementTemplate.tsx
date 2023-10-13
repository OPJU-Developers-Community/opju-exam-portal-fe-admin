// styled component
import FilterTab from "@/organisms/FilterTab/FilterTab";
import Header from "@/organisms/XHeader/Header";

// utils
import { userManagementTabs } from "@/utils/constants";

const UserManagementTemplate = () => {
  return (
    <div>
      <Header />
      <FilterTab tabs={userManagementTabs} />
    </div>
  );
};

export default UserManagementTemplate;
