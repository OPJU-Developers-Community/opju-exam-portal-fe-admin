import {
  Box,
  Card,
  CardContent,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  ChipBox,
  CourseBox,
  MainCard,
  ShowChipsButton,
  StyledBox,
  SubTitle,
  SubjectContainer,
  Title,
} from "./EducationCardStyle";
import { StyledChip } from "@/atoms/XChip/XChipStyle";
import { MouseEvent, MouseEventHandler, useState } from "react";

type educationManagementPropTypes = {
  data: userData[];
  apiStatus: string;
};

type userData = {
  program_name: string;
  course_name: string;
  branch: string;
  semester: string;
  subjects: [];
  _id: string;
};

const EducationCard = (props: educationManagementPropTypes) => {
  const { data, apiStatus } = props;

  return (
    <>
      {apiStatus === "loading" && (
        <>
          {[...new Array(data ? data.length : 8)].map((index) => (
            <Card key={index}>
              <Skeleton variant="rectangular" width={400} height={300} />
            </Card>
          ))}
        </>
      )}
      {apiStatus === "success" && (
        <>
          {data.map((user: userData, i) => {
            let { program_name, course_name, branch, semester, subjects, _id } =
              user;

            const [showMore, setShowMore] = useState(false);

            const handleClickShowMore = () => {
              setShowMore(true);
            };

            return (
              <MainCard key={i}>
                <CardContent>
                  <Title>Program</Title>
                  <SubTitle>{program_name}</SubTitle>
                  <StyledBox>
                    <CourseBox>
                      <Title>Course</Title>
                      <SubTitle>{course_name}</SubTitle>
                    </CourseBox>
                    <CourseBox>
                      <Title>Branch</Title>
                      <SubTitle>{branch}</SubTitle>
                    </CourseBox>
                    <CourseBox>
                      <Title>Semester</Title>
                      <SubTitle>{semester}</SubTitle>
                    </CourseBox>
                  </StyledBox>
                  <SubjectContainer>
                    <Title>Subjects</Title>
                  </SubjectContainer>
                  <ChipBox>
                    {subjects
                      .slice(0, showMore ? subjects.length : 2)
                      .map((item, index) => (
                        <StyledChip label={item} key={index} />
                      ))}
                    {!showMore && subjects.length > 2 && (
                      <ShowChipsButton onClick={handleClickShowMore}>
                        Show More
                      </ShowChipsButton>
                    )}
                  </ChipBox>
                </CardContent>
              </MainCard>
            );
          })}
        </>
      )}
    </>
  );
};

export default EducationCard;
