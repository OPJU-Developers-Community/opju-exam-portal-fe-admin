// lib & others
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// styled component
import FilterTab from "@/molecules/FilterTab/FilterTab";
import Header from "@/organisms/Header/Header";
import {
  ControlContainer,
  PageTitle,
  StyledBox,
  StyledContainer,
  Wrapper,
} from "./UserManagementTemplateStyle";
import UserManagementTable from "@/organisms/UserManagementTable/UserManagementTable";
import XButton from "@/atoms/XButton/XButton";
import { EditButtonIcon } from "@/atoms/Icons";

// redux
import { getUserManagement } from "@/redux/slices/userManagementSlice";

// utils
import { userManagementTabs } from "@/utils/constants";

const UserManagementTemplate = () => {
  const { data, apiStatus } = useSelector((state: any) => state.userManagement);
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const {
    query: { tab = "all" },
  } = router;

  useEffect(() => {
    dispatch(
      getUserManagement({
        params: {
          type: tab,
        },
      })
    );
  }, [tab]);

  return (
    <Wrapper>
      <Header />
      <StyledContainer>
        <PageTitle variant="h4" fontWeight={600} marginBottom={3}>
          User Management
        </PageTitle>
        <ControlContainer>
          <FilterTab tabs={userManagementTabs} />
          <XButton startIcon={<EditButtonIcon />}>Add</XButton>
        </ControlContainer>
        <StyledBox>
          <UserManagementTable data={data} apiStatus={apiStatus} />
        </StyledBox>
      </StyledContainer>
    </Wrapper>
  );
};

export default UserManagementTemplate;
