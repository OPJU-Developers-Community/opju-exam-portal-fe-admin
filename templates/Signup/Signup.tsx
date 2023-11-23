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
  InputField,
  LeftSection,
  RightSection,
  SignupButton,
  SignupWrapper,
  SigupBox,
  SubTitle,
  Text,
  Title,
} from "./SignupStyle";
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
