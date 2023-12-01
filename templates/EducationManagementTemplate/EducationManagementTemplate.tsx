import React, { useEffect, useState } from 'react'
import { ControlContainer, PageTitle, StyledBox, StyledContainer, Wrapper } from './EducationMangamentStyle'
import XButton from '@/atoms/XButton/XButton'
import { EditButtonIcon } from '@/atoms/Icons'
import FilterTab from '@/molecules/FilterTab/FilterTab'
import { educationManagementTabs } from '@/utils/constants'
import { getEducationManagement } from '@/redux/slices/educationManagementSlice'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import CreateEducationModal from '@/molecules/CreateEducationModal/CreateEducationModal'
import EducationManagementContainer from '@/organisms/EducationManagementContainer/EducationManagementContainer'

const EducationManagementTemplate = () => {
    const [openCreateEducationModal, setOpenCreateEducationModal] = useState(false);

  const { data, apiStatus } = useSelector((state: any) => state.educationManagement);
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

  const handleCreateEducationModalClose = () => setOpenCreateEducationModal(false);
  return (
    <Wrapper>
      <StyledContainer>
        <PageTitle variant="h5" fontWeight={600} marginBottom={3}>
          Education Management
        </PageTitle>
        <ControlContainer>
          <FilterTab tabs={educationManagementTabs} mxWidth="294px"/>
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
  )
}

export default EducationManagementTemplate