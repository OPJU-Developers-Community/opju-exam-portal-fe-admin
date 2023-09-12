// lib & others
import { useState } from "react";

// redux

// components
import { MenuItem, Popover, Typography } from "@mui/material";

// styled-components
import { Header, StyledButton, Wrapper } from "./EducationManagementStyle";
import EducationManagementModal from "@/particles/EducationManagementModal/EducationManagementModal";

// utils

// interface & types

const EducationManagementSection = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [ModalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);

    const handleModalOpen = (option: string) => {
        setSelectedOption(option);
        setModalOpen(true);
        handleClose();
    };

    const handleModalClose = () => setModalOpen(false);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Wrapper>
            <EducationManagementModal
                isOpen={ModalOpen}
                selectedOption={selectedOption}
                handleModalClose={handleModalClose} />
            <Header>
                <Typography variant="h6">Education management</Typography>
                <StyledButton onClick={handleClick}>Create Education</StyledButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    PaperProps={{
                        style: {
                            width: "155px",
                        },
                    }}
                >
                    <MenuItem onClick={() => handleModalOpen("school")}>School</MenuItem>
                    <MenuItem onClick={() => handleModalOpen("university")}>University</MenuItem>
                </Popover>
            </Header>
        </Wrapper>
    );
};

export default EducationManagementSection;
