// lib & others
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// redux

// components
import { Radio, RadioGroup, Typography } from "@mui/material";

// styled-components
import {
  FormControlWrapper,
  Header,
  StyledButton,
  StyledLabel,
  Wrapper,
} from "./EducationManagementStyle";
import EducationManagementModal from "@/molecules/EducationManagementModal/EducationManagementModal";

// utils

// interface & types

const EducationManagementSection = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("university");
  const router = useRouter();

  useEffect(() => {
    router.replace({ query: selectedValue });
  }, [selectedValue]);

  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <Wrapper>
      <Header>
        <Typography variant="h5" fontFamily="Nunito" fontWeight={600}>
          Education management
        </Typography>
        <StyledButton onClick={handleModalOpen}>Create Education</StyledButton>
      </Header>
      <FormControlWrapper>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
        >
          <StyledLabel
            value="university"
            control={<Radio />}
            label="University"
          />
          <StyledLabel value="school" control={<Radio />} label="School" />
        </RadioGroup>
      </FormControlWrapper>
      <EducationManagementModal
        isOpen={ModalOpen}
        handleModalClose={handleModalClose}
      />
    </Wrapper>
  );
};

export default EducationManagementSection;
