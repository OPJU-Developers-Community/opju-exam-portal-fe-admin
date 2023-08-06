// lib and other
import Image from "next/image";
import { motion } from "framer-motion";

// styles
import LoginSvg from "@/public/login.svg";
import {
  LeftSection,
  LoginBox,
  LoginWrapper,
  RightSection,
  SubTitle,
  Title,
  InputField,
  LoginButton,
} from "./LoginStyle";

const Login = () => {
  return (
    <LoginWrapper>
      <LeftSection>
        <Image src={LoginSvg} alt="login-image" />
      </LeftSection>
      <RightSection>
        <LoginBox>
          <Title>Login</Title>
          <SubTitle>Welcome back! please login to your account</SubTitle>
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
            <LoginButton variant="contained">Login</LoginButton>
          </motion.div>
        </LoginBox>
      </RightSection>
    </LoginWrapper>
  );
};

export default Login;
