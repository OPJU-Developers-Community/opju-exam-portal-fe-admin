// lib and others
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// components
import LoginTemplate from "@/templates/LoginTemplate/LoginTemplate";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>OPJU Exam Portal || login</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export default LoginPage;
