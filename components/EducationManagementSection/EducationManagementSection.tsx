// lib & others
import { useState } from "react";

// redux

// components
import { Typography } from "@mui/material";

// styled-components
import { Header, StyledButton, Wrapper } from "./EducationManagementStyle";
import EducationManagementModal from "@/molecules/EducationManagementModal/EducationManagementModal";

// utils

// interface & types

const EducationManagementSection = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);

  return (
    <Wrapper>
      <Header>
        <Typography variant="h5" fontFamily="Nunito" fontWeight={600}>
          Education management
        </Typography>
        <StyledButton onClick={handleModalOpen}>Create Education</StyledButton>
      </Header>
      <EducationManagementModal
        isOpen={ModalOpen}
        handleModalClose={handleModalClose}
      />
    </Wrapper>
  );
};

export default EducationManagementSection;
