// lib & others
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// components
import FilterTab from "@/molecules/FilterTab/FilterTab";
import UserManagementContainer from "@/organisms/UserManagementContainer/UserManagementContainer";
import {
  ControlContainer,
  PageTitle,
  StyledBox,
  StyledContainer,
  Wrapper,
} from "./UserManagementTemplateStyle";
import XButton from "@/atoms/XButton/XButton";
import { EditButtonIcon } from "@/atoms/Icons";

// redux
import { getUserManagement } from "@/redux/slices/userManagementSlice";

// utils
import { userManagementTabs } from "@/utils/constants";
import CreateUserModal from "@/molecules/CreateUserModal/CreateUserModal";

const UserManagementTemplate = () => {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);

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
          page: 1,
          limit: 10,
        },
      })
    );
  }, [tab]);

  const handleCreateUserModalOpen = () => setOpenCreateUserModal(true);

  const handleCreateUserModalClose = () => setOpenCreateUserModal(false);

  return (
    <Wrapper>
      <StyledContainer>
        <PageTitle variant="h5" fontWeight={600} marginBottom={3}>
          User Management
        </PageTitle>
        <ControlContainer>
          <FilterTab tabs={userManagementTabs}  mxWidth=""/>
          <XButton
            startIcon={<EditButtonIcon />}
            sx={{ fontSize: "14px" }}
            bgColor="#1F2A37"
            onClick={handleCreateUserModalOpen}
          >
            Create user
          </XButton>
        </ControlContainer>
      </StyledContainer>
      <StyledBox>
        <UserManagementContainer apiStatus={apiStatus} data={data} />
      </StyledBox>
      <CreateUserModal
        openCreateUserModal={openCreateUserModal}
        handleCreateUserModalClose={handleCreateUserModalClose}
      />
    </Wrapper>
  );
};

export default UserManagementTemplate;
