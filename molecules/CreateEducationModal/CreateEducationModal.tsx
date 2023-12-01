import XButton from '@/atoms/XButton/XButton';
import { Box, Modal } from '@mui/material';
import React from 'react'
import { ModalWrapper, StyledTextField, Text } from './CreateEducationModalSyle';
import { createEducatonFields } from '@/utils/constants';

interface createEducationModalProps {
  openCreateEducationModal: boolean;
  handleCreateEducationModalClose: () => void;
}

const CreateEducationModal = (props: createEducationModalProps) => {
  const {openCreateEducationModal, handleCreateEducationModalClose} = props
  return (
    <Modal
      open={openCreateEducationModal}
      aria-labelledby="create-user-modal-title"
      aria-describedby="create-user-modal-form"
    >
      <ModalWrapper>
        <Text fontSize="18px" fontWeight={500}>
          Fill Education information
        </Text>
        {createEducatonFields.map((item, i) => (
          <StyledTextField
            key={`${item}-${i}`}
            id={item.name}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            isPasswordField={item.name === "password" ? true : false}
            showPassword={item.name === "password" ? false : false}
            styles={{ margin: "1rem 0 0 0" }}
          />
        ))}
        <Box display="flex" justifyContent="flex-end" marginTop={3}>
          <XButton
            bgColor="transparent"
            textColor="#6B7280"
            disableRipple={true}
            onClick={handleCreateEducationModalClose}
          >
            Cancel
          </XButton>
          <XButton bgColor="#5850EC">Create</XButton>
        </Box>
      </ModalWrapper>
    </Modal>
  )
}

export default CreateEducationModal