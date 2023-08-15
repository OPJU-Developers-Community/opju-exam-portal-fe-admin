// lib and others
import { useEffect } from "react";

// components
import withAuth from "@/hoc/withAuth";
import NavBar from "@/components/NavBar/NavBar";

function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default withAuth(Home);
