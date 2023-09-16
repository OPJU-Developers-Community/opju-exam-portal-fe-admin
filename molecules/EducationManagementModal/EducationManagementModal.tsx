// lib & others
import { useState } from "react";

// interface & types
import { EducationManagementModalPropType } from "@/types/index.type";

// components
import { Box, Modal, Radio, RadioGroup, Typography } from "@mui/material";
import UniversityInfo from "../UniversityInfo/UniversityInfo";

// styled-components
import {
  FormControlWrapper,
  ModalWrapper,
  StyledLabel,
} from "./EducationManagementModalStyle";

const EducationManagementModal = (props: EducationManagementModalPropType) => {
  const { isOpen, handleModalClose } = props;
  const [selectedValue, setSelectedValue] = useState("university");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <Typography
          variant="h6"
          fontFamily="Nunito"
          fontWeight={500}
          paddingTop={1}
        >
          Education Information
        </Typography>

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
            <StyledLabel value="School" control={<Radio />} label="School" />
          </RadioGroup>
        </FormControlWrapper>

        {selectedValue === "university" ? <UniversityInfo /> : null}
      </ModalWrapper>
    </Modal>
  );
};

export default EducationManagementModal;
