
// styled component
import { Header, StyledButton, Wrapper } from "./EducationManagementSectionStyle"

// utils
import { AddIcon } from "@/utils/icons"

const EducationManagementSection = () => {
  return (
    <Wrapper>
      <Header>
        Educational Management
        <StyledButton><AddIcon /> Add program</StyledButton>
      </Header>
    </Wrapper>
  )
}

export default EducationManagementSection