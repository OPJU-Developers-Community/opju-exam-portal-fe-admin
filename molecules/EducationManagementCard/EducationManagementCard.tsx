// libs & others

// styled component
import { Box, Divider } from "@mui/material";
import {
  CardBody,
  CardHeader,
  CardWrapper,
  ContentBox,
  CourseDetailBox,
  StyledIconButton,
  StyledText,
  Text,
} from "./EducationManagementCardSyle";
import {
  BookIcon,
  BranchIcon,
  IconBuddyDeleteIcon,
  PencilIcon,
} from "@/atoms/Icons";
import XChip from "@/atoms/XChip/XChip";
import XButton from "@/atoms/XButton/XButton";

// utls

interface educationManagementCardProps {
  item: {
    program: string;
    course: string;
    branch: string;
    semester: string;
    subjects: string[];
  };
}

const EducationManagementCard = (props: educationManagementCardProps) => {
  const { item } = props;
  const { program, course, branch, semester, subjects } = item;
  return (
    <CardWrapper>
      <CardHeader>
        <Box display="flex" alignItems="center">
          <Box marginLeft="8px">
            <Text fontSize="18px" fontWeight={500}>
              {program}
              <Text color="#6B7280">Program</Text>
            </Text>
          </Box>
        </Box>
        <StyledIconButton edge="start">
          <IconBuddyDeleteIcon />
        </StyledIconButton>
      </CardHeader>
      <Divider />
      <CardBody>
        <ContentBox>
          <CourseDetailBox>
            <PencilIcon />
            <Text color="#6B7280">Course:</Text>{" "}
            <StyledText>{course}</StyledText>
          </CourseDetailBox>
          <CourseDetailBox>
            <BranchIcon />
            <Text color="#6B7280">Branch:</Text>{" "}
            <StyledText>{branch}</StyledText>
          </CourseDetailBox>
        </ContentBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: ".5rem 0rem",
            gap: ".5rem",
          }}
        >
          <BookIcon />
          <Text color="#6B7280">Semester:</Text>{" "}
          <StyledText>{semester}</StyledText>
        </Box>
        <div>
          <Text color="#6B7280" fontSize="16px">
            Subject
          </Text>
          <Box>
            {subjects.map((item, i) => (
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
        </Box>
      </CardBody>
    </CardWrapper>
  );
};

export default EducationManagementCard;
