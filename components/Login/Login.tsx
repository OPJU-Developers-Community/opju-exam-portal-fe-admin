// lib and other
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// thunk and slices
import { login, userState } from "@/redux/slices/authSlice";

// types
import { loginType } from "@/types/auth.type";

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
  CreateAccountBox,
} from "./LoginStyle";

const Login = () => {
  const [inputFieldValues, setInputFiledValues] = useState<loginType>({
    email: "",
    password: "",
  });

  const authState = useSelector((state: { auth: userState }) => state.auth);

  const dispatch = useDispatch<any>();

  const route = useRouter();

  useEffect(() => {
    if (authState.status === "success") {
      route.push("/");
    }
  }, [authState.status]);

  const handleInputFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputFiledValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    dispatch(login(inputFieldValues));
  };
  return (
    <LoginWrapper>
      <LeftSection>
        <Image src={LoginSvg} alt="login-image" />
      </LeftSection>
      <RightSection>
        <LoginBox>
          <Title>Login</Title>
          <SubTitle>Welcome back! please login to your account</SubTitle>
          <InputField
            id="standard-basic-email"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleInputFieldChange}
            data-test="login-input-field"
          />
          <InputField
            id="standard-basic-password"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            onChange={handleInputFieldChange}
            data-test="login-password-field"
          />
          <motion.div
            whileTap={{
              scale: 0.99,
            }}
          >
            <LoginButton variant="contained" onClick={handleLogin} data-test="login-button">
              Login
            </LoginButton>
          </motion.div>
          <CreateAccountBox href="/signup" underline="none">
            Create Account
          </CreateAccountBox>
        </LoginBox>
      </RightSection>
    </LoginWrapper>
  );
};

export default Login;
