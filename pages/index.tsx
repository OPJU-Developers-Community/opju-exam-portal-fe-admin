// lib and others
import { useEffect } from "react";
import { useRouter } from "next/router";

// components
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
}
