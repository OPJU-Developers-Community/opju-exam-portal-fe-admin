// lib and others
import { useEffect } from "react";

// hoc
import withAuth from "@/hoc/withAuth";

// components
import DashboardTemplate from "@/templates/DashboardTemplate/DashboardTemplate";

function Home() {
  return (
    <>
      <DashboardTemplate />
    </>
  );
}

export default withAuth(Home);
