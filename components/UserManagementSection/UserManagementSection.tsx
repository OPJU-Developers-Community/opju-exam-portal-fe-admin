// lib and others
import { useState } from "react";

// redux

// components
import { Avatar, MenuItem, MenuList, Popover, Typography } from "@mui/material";

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
} from "./UserManagementSectionStyle";

// utils
import { AddIcon, DeleteIcon, EditIcon, KebabMenuIcon } from "@/utils/icons";

// interface & types
type PropInterface = {
  title: string;
};

const UserManagementSection = (props: PropInterface) => {
  const { title = "" } = props;

  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Wrapper>
      <Header>
        <Typography variant="h6" fontFamily={"Nunito"}>
          {title}
        </Typography>
        <StyledButton>
          <AddIcon />
          Add
        </StyledButton>
      </Header>
      <Body>
        <Card>
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
                  setter one
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  fontFamily={"Nunito"}
                  marginX={1}
                >
                  email
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
                  <MenuItem onClick={handleClose} sx={{ fontFamily: "Nunito" }}>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{ fontFamily: "Nunito" }}>
                    <DeleteIcon />
                    Delete
                  </MenuItem>
                </MenuList>
              </Popover>
            </KebabMenuBox>
          </CardHeader>
          <CardBody>
            <StyledChip label="Operating system" />
          </CardBody>
        </Card>
      </Body>
    </Wrapper>
  );
};

export default UserManagementSection;
