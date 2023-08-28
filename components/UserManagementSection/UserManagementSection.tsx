// lib and others
import { useState } from "react";

// redux

// components
import {
  Avatar,
  Box,
  MenuItem,
  MenuList,
  Modal,
  Popover,
  Skeleton,
  Typography,
} from "@mui/material";
import UserManagementModal from "@/particles/UserManagementModal/UserManagementModal";

// styled-component
import {
  Wrapper,
  Header,
  Body,
  StyledButton,
  Card,
  CardHeader,
  CardBody,
  StyledChip,
  KebabMenuBox,
  LeftSection,
  SkeletonWrapper,
} from "./UserManagementSectionStyle";

// utils
import { AddIcon, DeleteIcon, EditIcon, KebabMenuIcon } from "@/utils/icons";

// interface & types
type dataObjectType = {
  firstname: string;
  lastname: string;
  access: string[];
  email: string;
  profilePic: string;
};

type propType = {
  title: string;
  data: dataObjectType[];
  apiStatus: string;
};

const UserManagementSection = (props: propType) => {
  const { title = "", data = [], apiStatus = "idle" } = props;

  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const [ModalOpen, setModalOpen] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);

  return (
    <Wrapper>
      <Header>
        <Typography variant="h6" fontFamily={"Nunito"}>
          {title}
        </Typography>
        <StyledButton onClick={handleModalOpen}>
          <AddIcon />
          <Typography fontFamily="Nunito" fontWeight={500}>
            Add
          </Typography>
        </StyledButton>
      </Header>
      <Body>
        <UserManagementModal
          isOpen={ModalOpen}
          handleModalClose={handleModalClose}
        />
        {apiStatus === "success" && (
          <>
            {data.map((item, i) => {
              const { firstname, lastname, access, email, profilePic } = item;

              return (
                <Card key={i}>
                  <CardHeader>
                    <LeftSection>
                      <Avatar>H</Avatar>
                      <div>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          fontFamily={"Nunito"}
                          marginX={1}
                        >
                          {`${firstname} ${lastname}`}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          fontWeight={500}
                          fontFamily={"Nunito"}
                          marginX={1}
                          color="#4361ee"
                        >
                          {email}
                        </Typography>
                      </div>
                    </LeftSection>
                    <KebabMenuBox>
                      <KebabMenuIcon handleClick={handleClick} />
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <MenuList dense>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ fontFamily: "Nunito" }}
                          >
                            <EditIcon />
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ fontFamily: "Nunito" }}
                          >
                            <DeleteIcon />
                            Delete
                          </MenuItem>
                        </MenuList>
                      </Popover>
                    </KebabMenuBox>
                  </CardHeader>
                  <CardBody>
                    {access.map((item, i) => (
                      <StyledChip label={item} key={i} />
                    ))}
                  </CardBody>
                </Card>
              );
            })}
          </>
        )}

        {apiStatus === "loading" && (
          <>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <SkeletonWrapper key={index}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50%", margin: "0.5rem 0" }}
                />
                <Skeleton variant="rectangular" width={210} height={20} />
              </SkeletonWrapper>
            ))}
          </>
        )}
      </Body>
    </Wrapper>
  );
};

export default UserManagementSection;
