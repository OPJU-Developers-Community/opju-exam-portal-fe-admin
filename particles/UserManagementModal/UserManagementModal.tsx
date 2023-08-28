// components
import { Box, Modal, Typography } from "@mui/material";

// styled-component
import {
  InputField,
  ModalWrapper,
  SaveButton,
} from "./UserManagementModalStyle";

const UserManagementModal = (props) => {
  const { isOpen, handleModalClose } = props;

  return (
    <Modal
      open={isOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <InputField
          id="standard-basic-email"
          label="Email"
          variant="standard"
          name="email"
          onChange={() => {}}
        />
        <InputField
          id="standard-basic-password"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={() => {}}
        />
        <Box sx={{ display: "flex", gap: "0 1rem" }}>
          <InputField
            id="standard-basic-firstname"
            label="First Name"
            variant="standard"
            name="firstname"
            onChange={() => {}}
          />
          <InputField
            id="standard-basic-lastname"
            label="Last Name"
            variant="standard"
            name="lastname"
            onChange={() => {}}
          />
        </Box>
        <InputField
          id="standard-basic-access"
          label="Access"
          variant="standard"
          name="access"
          onChange={() => {}}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 1 }}>
          <SaveButton onClick={() => {}}>
            <Typography fontFamily="Nunito" fontWeight={500}>
              Save
            </Typography>
          </SaveButton>
        </Box>
      </ModalWrapper>
    </Modal>
  );
};

export default UserManagementModal;
