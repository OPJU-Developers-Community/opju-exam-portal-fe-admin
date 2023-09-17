// lib & others
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

// components
import Signup from "@/components/Signup/Signup";

const SignupPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>OPJU Exam Portal || signup page</title>
      </Head>
      <Signup />
    </>
  );
};

export default SignupPage;
