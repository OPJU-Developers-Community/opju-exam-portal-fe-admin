// lib & other
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// thunk and slices
import { signUp, userState } from "@/redux/slices/authSlice";

// types
import { signupType } from "@/types/auth.type";

// styles
import {
  FlexContainer,
  LeftSection,
  RightSection,
  SignupButton,
  SignupWrapper,
  SigupBox,
  SubTitle,
  Text,
  Title,
} from "./SignupStyle";
import XTextField from "@/atoms/XInputLabel/XInputLabel";

import {
  InputEndClearIcon,
  InputEndEyeCloseIcon,
  InputEndEyeIcon,
  InputStartEmailIcon,
  InputStartPasswordIcon,
  InputStartUserIcon,
} from "@/atoms/Icons";

import { AuthPageAd } from "@/utils/constants";

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
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {AuthPageAd.map((slideData, i) => {
            const { title, description, img } = slideData;

            return (
              <SwiperSlide>
                <FlexContainer>
                  <div>
                    <Text fontSize="2.3rem" fontWeight={600}>
                      {title}
                    </Text>
                    <Text
                      fontSize="1rem"
                      marginBottom={5}
                      fontWeight={400}
                      color="#F3F4F6"
                    >
                      {description}
                    </Text>
                  </div>
                  <Image height={400} src={img} alt="management-svg" />
                </FlexContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </LeftSection>
      <RightSection>
        <SigupBox>
          <Title>Create new account</Title>
          <SubTitle>Seamless Access for Administrators</SubTitle>
          <XTextField
            id="name"
            name="username"
            label="Your name"
            placeholder="Enter your name"
            startIcon={<InputStartUserIcon />}
            endIcon={<InputEndClearIcon />}
            onChange={handleInputFieldChange}
            styles={{ margin: "1.5rem 0 0 0" }}
          />
          <XTextField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your Email"
            startIcon={<InputStartEmailIcon />}
            endIcon={<InputEndClearIcon />}
            onChange={handleInputFieldChange}
          />
          <XTextField
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your Password"
            startIcon={<InputStartPasswordIcon />}
            endIcon={false ? <InputEndEyeCloseIcon /> : <InputEndEyeIcon />}
            onChange={handleInputFieldChange}
            showPassword={false}
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
