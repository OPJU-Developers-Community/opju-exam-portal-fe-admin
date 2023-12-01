// lib & others
import { useState } from "react";

// styled component
import {
  CardBody,
  CardHeader,
  CardWrapper,
  StyledAvatar,
  StyledIconButton,
  StyledText,
  Text,
} from "./UserManagementCardStyle";
import { Box } from "@mui/material";
import { IconBuddyDeleteIcon } from "@/atoms/Icons";
import XChip from "@/atoms/XChip/XChip";
import XButton from "@/atoms/XButton/XButton";

// utils
import { defaultProfilePic } from "@/utils/constants";

// types
interface userManagementCardProps {
  item: {
    first_name: string;
    last_name: string;
    email_id: string;
    profile_pic: string;
    subject_access: string[];
    user_type: string;
  };
}

const UserManagementCard = (props: userManagementCardProps) => {
  const { item } = props;
  const {
    first_name,
    last_name,
    email_id,
    profile_pic,
    subject_access,
    user_type,
  } = item;

  return (
    <CardWrapper>
      <CardHeader>
        <Box display="flex" alignItems="center">
          <StyledAvatar src={profile_pic ? profile_pic : defaultProfilePic} />
          <Box marginLeft="8px">
            <Text fontSize="18px" fontWeight={500}>
              {`${first_name}${last_name}`}
            </Text>
            <Text color="#6B7280" fontSize="14px">
              {email_id}
            </Text>
            <StyledText
              fontSize="14px"
              display="flex"
              textTransform="capitalize"
            >
              <Text
                fontSize="14px"
                color="#6B7280"
                fontWeight={500}
                marginRight={0.2}
                textTransform="none"
              >
                User type:
              </Text>
              {user_type}
            </StyledText>
          </Box>
        </Box>
        <StyledIconButton edge="start">
          <IconBuddyDeleteIcon />
        </StyledIconButton>
      </CardHeader>
      <CardBody>
        <div>
          <Text color="#6B7280" fontSize="16px">
            Subject access
          </Text>
          <Box>
            {subject_access.map((item, i) => (
              <XChip
                key={i}
                label={item}
                bgColor="#E1EFFE"
                textColor="#1E429F"
                mt="0.3rem"
                mr="0.5rem"
              />
            ))}
          </Box>
        </div>
        <Box display="flex" justifyContent="flex-end" marginTop={3}>
          <XButton bgColor="#5850EC">Edit info</XButton>
          <XButton bgColor="transparent" textColor="#6B7280">
            Reset password
          </XButton>
        </Box>
      </CardBody>
    </CardWrapper>
  );
};

export default UserManagementCard;
