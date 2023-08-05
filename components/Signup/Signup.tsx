// lib & other
import Image from "next/image";
import { motion } from "framer-motion";

// styles
import {
  InputField,
  LeftSection,
  RightSection,
  SignupButton,
  SignupWrapper,
  SigupBox,
  SubTitle,
  Title,
} from "./SignupStyle";
import managementSvg from "@/public/management.svg";

const Signup = () => {
  return (
    <SignupWrapper>
      <LeftSection>
        <Image src={managementSvg} alt="management-svg" />
      </LeftSection>
      <RightSection>
        <SigupBox>
          <Title>Create Account</Title>
          <SubTitle>Seamless Access for Administrators</SubTitle>
          <InputField id="standard-basic" label="Name" variant="standard" />
          <InputField id="standard-basic" label="Email" variant="standard" />
          <InputField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <motion.div
            whileTap={{
              scale: 0.99,
            }}
          >
            <SignupButton variant="contained">Sign Up</SignupButton>
          </motion.div>
        </SigupBox>
      </RightSection>
    </SignupWrapper>
  );
};

export default Signup;
