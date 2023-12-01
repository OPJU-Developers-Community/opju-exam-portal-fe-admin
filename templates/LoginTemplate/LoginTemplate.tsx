// libs & others
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Link } from "@mui/material";

// thunk and slices
import { login, userState } from "@/redux/slices/authSlice";

// types
import { loginType } from "@/types/auth.type";

// styles
import {
  FlexContainer,
  LeftSection,
  LoginBox,
  LoginButton,
  LoginWrapper,
  RightSection,
  SubTitle,
  Text,
  Title,
} from "./LoginTemplateStyle";
import XTextField from "@/atoms/XInputLabel/XInputLabel";
import {
  InputEndClearIcon,
  InputEndEyeCloseIcon,
  InputEndEyeIcon,
  InputStartEmailIcon,
  InputStartPasswordIcon,
} from "@/atoms/Icons";

// utils
import { AuthPageAd, defaultErrorMessage } from "@/utils/constants";
import { errorNotify, successNotify } from "@/utils/notify";

const LoginTemplate = () => {
  const [inputFieldValues, setInputFiledValues] = useState<loginType>({
    email: "",
    password: "",
  });

  const authState = useSelector((state: { auth: userState }) => state.auth);

  const dispatch = useDispatch<any>();

  const route = useRouter();

  useEffect(() => {
    if (authState.status === "success") {
      successNotify({ message: authState.message });
      route.push("/");
    }

    if (authState.status === "failed") {
      errorNotify({ message: authState.message || defaultErrorMessage });
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
              <SwiperSlide key={i}>
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
                </FlexContainer>
                <Image height={400} src={img} alt="management-svg" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </LeftSection>
      <RightSection>
        <LoginBox>
          <Title>Login</Title>
          <SubTitle>Welcome back! please login to your account</SubTitle>
          <XTextField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your Email"
            startIcon={<InputStartEmailIcon />}
            endIcon={<InputEndClearIcon />}
            onChange={handleInputFieldChange}
            data-test="login-input-field"
          />
          <XTextField
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your Password"
            startIcon={<InputStartPasswordIcon />}
            endIcon={false ? <InputEndEyeCloseIcon /> : <InputEndEyeIcon />}
            onChange={handleInputFieldChange}
            isPasswordField={true}
            showPassword={false}
            data-test="login-password-field"
          />
          <motion.div
            whileTap={{
              scale: 0.99,
            }}
          >
            <LoginButton
              variant="contained"
              onClick={handleLogin}
              data-test="login-button"
            >
              Login
            </LoginButton>
          </motion.div>
          <Link href="/signup" underline="none">
            Create Account
          </Link>
        </LoginBox>
      </RightSection>
    </LoginWrapper>
  );
};

export default LoginTemplate;
