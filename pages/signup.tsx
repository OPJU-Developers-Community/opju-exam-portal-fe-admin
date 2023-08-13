// lib & others
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

// components
import Signup from "@/components/Signup/Signup";

const SignupPage = () => {
  const router = useRouter();

  useEffect(() => {
    const access_token = window.localStorage.getItem("access_token") || "";
    if (access_token !== "") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>OPJU Exam Portal || signup</title>
      </Head>
      <Signup />
    </>
  );
};

export default SignupPage;
