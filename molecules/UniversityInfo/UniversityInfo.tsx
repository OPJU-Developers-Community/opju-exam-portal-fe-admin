// lib & others
import { useState } from "react";

// components
import { Autocomplete, Box, Typography } from "@mui/material";

// styled-components
import {
  InputField,
  InputWrapper,
  SaveButton,
  Wrapper,
} from "./UniversityInfoStyle";

// types & interface

const UniversityInfo = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [fieldData, setFieldData] = useState({
    program_name: "",
    course_name: "",
    branch: "",
    semester: "",
  });

  const handleInputFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <InputField
        id="standard-basic-email"
        label="Program Name"
        variant="standard"
        name="program_name"
        onChange={handleInputFieldChange}
      />
      <InputField
        id="standard-basic-email"
        label="Course Name"
        variant="standard"
        name="course_name"
        onChange={handleInputFieldChange}
      />
      <InputWrapper>
        <InputField
          id="standard-basic-email"
          label="Branch"
          variant="standard"
          name="branch"
          onChange={handleInputFieldChange}
        />
        <InputField
          id="standard-basic-email"
          label="Semester"
          variant="standard"
          name="semester"
          onChange={handleInputFieldChange}
        />
      </InputWrapper>
      <Autocomplete
        multiple
        freeSolo
        id="auto-complete"
        options={[].map((options) => options)}
        value={subjects}
        onChange={(event: any, newValue: string[]) => {
          setSubjects(newValue);
        }}
        renderInput={(params) => (
          <InputField
            {...params}
            variant="standard"
            label="Enter subjects"
            placeholder="Operating System, Database Management System"
          />
        )}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 1 }}>
        <SaveButton onClick={() => {}}>
          <Typography fontFamily="Nunito" fontWeight={500}>
            Save
          </Typography>
        </SaveButton>
      </Box>
    </Wrapper>
  );
};

export default UniversityInfo;
