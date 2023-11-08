// lib and others
import { MouseEventHandler, useState } from "react";

// styled components
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
import {
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { StyledChip } from "@/atoms/XChip/XChipStyle";

// utils

// types & interface
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
          {[...new Array(6)].map((_, index) => {
            return (
              <>
                <MainCard key={index}>
                  <CardContent>
                    <Title>
                      <Typography variant="body1">
                        <Skeleton animation="wave" width={100} />
                      </Typography>
                    </Title>
                    <Typography variant="h3">
                      <Skeleton animation="wave" width={150} />
                    </Typography>
                    <StyledBox>
                      <CourseBox>
                        <Title>
                          <Typography variant="body1">
                            <Skeleton animation="wave" width={50} />
                          </Typography>
                        </Title>
                        <Typography variant="h3">
                          <Skeleton animation="wave" width={60} />
                        </Typography>
                      </CourseBox>
                      <CourseBox>
                        <Title>
                          <Typography variant="body1">
                            <Skeleton animation="wave" width={50} />
                          </Typography>
                        </Title>
                        <Typography variant="h3">
                          <Skeleton animation="wave" width={60} />
                        </Typography>
                      </CourseBox>
                      <CourseBox>
                        <Title>
                          <Typography variant="body1">
                            <Skeleton animation="wave" width={50} />
                          </Typography>
                        </Title>
                        <Typography variant="h3">
                          <Skeleton animation="wave" width={60} />
                        </Typography>
                      </CourseBox>
                    </StyledBox>
                    <SubjectContainer>
                      <Title>
                        <Typography variant="body1">
                          <Skeleton animation="wave" width={100} />
                        </Typography>
                      </Title>
                    </SubjectContainer>
                    <ChipBox>
                      {[...new Array(4)].map((_, chipIndex) => (
                        <Typography variant="body1">
                          <Skeleton animation="wave" width={50} />
                        </Typography>
                      ))}
                    </ChipBox>
                  </CardContent>
                </MainCard>
              </>
            );
          })}
        </>
      )}
      {apiStatus === "success" && (
        <>
          {data.map((user: userData, i) => {
            let { program_name, course_name, branch, semester, subjects, _id } =
              user;

            const [showMore, setShowMore] = useState(false);

            const handleClickShowMore: MouseEventHandler<
              HTMLSpanElement
            > = () => {
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
                      .slice(0, showMore ? subjects.length : 3)
                      .map((item, index) => (
                        <StyledChip label={item} key={index} />
                      ))}
                    {!showMore && subjects.length > 3 && (
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
