import { EducationManagementModalPropType } from "@/types/index.type"
import { Box, Modal, Typography } from "@mui/material";
import { InputField, InputWrapper, ModalWrapper, SaveButton } from "./EducationManagementModalStyle";

const EducationManagementModal = (props: EducationManagementModalPropType) => {
    const { isOpen, handleModalClose, selectedOption } = props;
    return (
        <Box>
            {
                selectedOption === "school" && (
                    <Modal
                        open={isOpen}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                School Modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                To be implemented
                            </Typography>
                        </Box>
                    </Modal>
                )
            }


            {
                selectedOption === "university" && (
                    <Modal
                        open={isOpen}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <ModalWrapper>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Education Information
                            </Typography>
                            <InputField
                                id="standard-basic-email"
                                label="Program Name"
                                variant="standard"
                                name="programName"
                                onChange={() => { }}
                            />
                            <InputField
                                id="standard-basic-email"
                                label="Course Name"
                                variant="standard"
                                name="courseName"
                                onChange={() => { }}
                            />
                            <InputWrapper>
                                <InputField
                                    id="standard-basic-email"
                                    label="Branch"
                                    variant="standard"
                                    name="branch"
                                    onChange={() => { }}
                                />
                                <InputField
                                    id="standard-basic-email"
                                    label="Semester"
                                    variant="standard"
                                    name="semester"
                                    onChange={() => { }}
                                />
                            </InputWrapper>
                            <InputField
                                id="standard-basic-email"
                                label="Subjects"
                                variant="standard"
                                name="subjects"
                                onChange={() => { }}
                            />
                            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 1 }}>
                                <SaveButton onClick={() => { }}>
                                    <Typography fontFamily="Nunito" fontWeight={500}>
                                        Save
                                    </Typography>
                                </SaveButton>
                            </Box>
                        </ModalWrapper>
                    </Modal>
                )
            }
        </Box>
    )
}

export default EducationManagementModal