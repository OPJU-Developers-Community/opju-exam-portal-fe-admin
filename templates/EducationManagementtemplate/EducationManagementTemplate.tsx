// lib & others
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

// styled component
import FilterTab from "@/molecules/FilterTab/FilterTab";
import Header from "@/organisms/Header/Header";
import {
  ControlContainer,
  PageTitle,
  StyledBox,
  StyledContainer,
  Wrapper,
} from "./EducationManagementTemplateStyle";
import EducationCard from "@/organisms/EducationCard/EducationCard";
import XButton from "@/atoms/XButton/XButton";
import { EditButtonIcon } from "@/atoms/Icons";

// redux
import { getEducationManagement } from "@/redux/slices/educationManagementSlice";

// utils
import { educationManagementTabs } from "@/utils/constants";

const EducationManagementTemplate = () => {
  const { data, apiStatus } = useSelector(
    (state: any) => state.educaionManangement
  );
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const {
    query: { tab = "all" },
  } = router;

  useEffect(() => {
    dispatch(
      getEducationManagement({
        params: {
          type: tab,
        },
      })
    );
  }, [tab]);
  return (
    <Wrapper>
      <Header />
      <StyledContainer>
        <PageTitle variant="h4" fontWeight={600} marginBottom={3}>
          Education Management
        </PageTitle>
        <ControlContainer>
          <FilterTab tabs={educationManagementTabs} mxWidth="300px" />
          <XButton
            startIcon={<EditButtonIcon />}
            onClick={() => console.log("buton pressed")}
          >
            Add
          </XButton>
        </ControlContainer>
        <StyledBox>
          <EducationCard data={data} apiStatus={apiStatus} />
        </StyledBox>
      </StyledContainer>
    </Wrapper>
  );
};

export default EducationManagementTemplate;
