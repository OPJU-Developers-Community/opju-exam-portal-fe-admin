// lib & other
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// thunk and slices
import { signUp, userState } from "@/redux/slices/authSlice";

// types
import { signupType } from "@/types/auth.type";

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
  const [inputFieldValues, setInputFiledValues] = useState<signupType>({
    username: "",
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

  const handleSignup = () => {
    dispatch(signUp(inputFieldValues));
  };

  return (
    <SignupWrapper>
      <LeftSection>
        <Image src={managementSvg} alt="management-svg" />
      </LeftSection>
      <RightSection>
        <SigupBox>
          <Title>Create Account</Title>
          <SubTitle>Seamless Access for Administrators</SubTitle>
          <InputField
            id="standard-basic-name"
            label="Name"
            variant="standard"
            name="username"
            onChange={handleInputFieldChange}
          />
          <InputField
            id="standard-basic-email"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleInputFieldChange}
          />
          <InputField
            id="standard-basic-password"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            onChange={handleInputFieldChange}
          />
          <motion.div
            whileTap={{
              scale: 0.99,
            }}
          >
            <SignupButton variant="contained" onClick={handleSignup}>
              Sign Up
            </SignupButton>
          </motion.div>
        </SigupBox>
      </RightSection>
    </SignupWrapper>
  );
};

export default Signup;
