import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";
import {
  CreateButton,
  FormField,
  LabelText,
  ModalTitle,
  SelectBox,
  style,
} from "./AddEducationModalStyle";
import { CloseIcon } from "@/atoms/Icons";
import XChip from "@/atoms/XChip/XChip";

interface ModalPropType {
  open: boolean;
  handleClose: () => void;
}

const formData = [
  { label: "Program", id: "program" },
  { label: "Course", id: "course" },
  { label: "Branch", id: "branch" },
  { label: "Semester", id: "semester" },
];

const AddEducationModal = (props: ModalPropType) => {
  const { open, handleClose } = props;

  const [education, seteducation] = useState("university");

  const handleChange = (event: SelectChangeEvent<string>) => {
    seteducation(event.target.value);
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteChip = (index: number) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              mb: ".75rem",
            }}
          >
            <CloseIcon onClick={handleClose} />
          </Box>
          <ModalTitle>Add Education</ModalTitle>
          <Divider />
          <Box>
            <Box sx={{ mt: "1rem" }}>
              <LabelText>Education</LabelText>
              <Select
                fullWidth
                value={education}
                onChange={handleChange}
                sx={{
                  height: "52px",
                  borderRadius: "0.5rem",
                }}
              >
                <MenuItem value="university">University</MenuItem>
                <MenuItem value="school">School</MenuItem>
              </Select>
            </Box>
            {formData.map((field) => (
              <Box key={field.id} sx={{ mt: "1rem", mb: "1rem" }}>
                <LabelText>{field.label}</LabelText>
                <FormField fullWidth variant="filled" />
              </Box>
            ))}
            <LabelText>Subjects</LabelText>
            <CreateButton variant="contained">Create</CreateButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddEducationModal;
