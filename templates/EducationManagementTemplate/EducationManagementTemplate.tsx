// libs & others
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// components
import FilterTab from "@/molecules/FilterTab/FilterTab";
import EducationManagementContainer from "@/organisms/EducationManagementContainer/EducationManagementContainer";
import CreateEducationModal from "@/molecules/CreateEducationModal/CreateEducationModal";
import XButton from "@/atoms/XButton/XButton";
import { EditButtonIcon } from "@/atoms/Icons";
import {
  ControlContainer,
  PageTitle,
  StyledBox,
  StyledContainer,
  Wrapper,
} from "./EducationMangamentTemplateStyle";

// thunk and slices
import { getEducationManagement } from "@/redux/slices/educationManagementSlice";

// utils
import { educationManagementTabs } from "@/utils/constants";

const EducationManagementTemplate = () => {
  const [openCreateEducationModal, setOpenCreateEducationModal] =
    useState(false);

  const { data, apiStatus } = useSelector(
    (state: any) => state.educationManagement
  );
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const {
    query: { tab = "all" },
  } = router;

  useEffect(() => {
    dispatch(
      getEducationManagement({
        params: {
          type: tab,
          page: 1,
          limit: 10,
        },
      })
    );
  }, [tab]);

  const handleCreateUserModalOpen = () => setOpenCreateEducationModal(true);

  const handleCreateEducationModalClose = () =>
    setOpenCreateEducationModal(false);
  return (
    <Wrapper>
      <StyledContainer>
        <PageTitle variant="h5" fontWeight={600} marginBottom={3}>
          Education Management
        </PageTitle>
        <ControlContainer>
          <FilterTab tabs={educationManagementTabs} mxWidth="294px" />
          <XButton
            startIcon={<EditButtonIcon />}
            sx={{ fontSize: "14px" }}
            bgColor="#1F2A37"
            onClick={handleCreateUserModalOpen}
          >
            Create education
          </XButton>
        </ControlContainer>
      </StyledContainer>
      <StyledBox>
        <EducationManagementContainer apiStatus={apiStatus} data={data} />
      </StyledBox>
      <CreateEducationModal
        openCreateEducationModal={openCreateEducationModal}
        handleCreateEducationModalClose={handleCreateEducationModalClose}
      />
    </Wrapper>
  );
};

export default EducationManagementTemplate;
