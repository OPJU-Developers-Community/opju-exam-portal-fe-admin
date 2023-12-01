// componenets
import { Box, Modal } from "@mui/material";
import { ModalWrapper, StyledTextField, Text } from "./CreateUserModalStyle";
import XButton from "@/atoms/XButton/XButton";

// utils
import { createUserFields } from "@/utils/constants";

// types
interface createUserModalProps {
  openCreateUserModal: boolean;
  handleCreateUserModalClose: () => void;
}
const CreateUserModal = (props: createUserModalProps) => {
  const { openCreateUserModal, handleCreateUserModalClose } = props;
  return (
    <Modal
      open={openCreateUserModal}
      aria-labelledby="create-user-modal-title"
      aria-describedby="create-user-modal-form"
    >
      <ModalWrapper>
        <Text fontSize="18px" fontWeight={500}>
          Fill user information
        </Text>
        {createUserFields.map((item, i) => (
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
            onClick={handleCreateUserModalClose}
          >
            Cancel
          </XButton>
          <XButton bgColor="#5850EC">Create</XButton>
        </Box>
      </ModalWrapper>
    </Modal>
  );
};

export default CreateUserModal;
